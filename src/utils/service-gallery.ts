/**
 * Controlador de galería automática y crossfade para las cards de Servicios.
 *
 * Soporta:
 * - Desktop: rotación al hacer hover (~1200ms) y retorno suave a la imagen principal al salir.
 * - Mobile/tablet táctil: rotación automática mientras la card está visible en viewport (~1800ms) y pausa al salir.
 * - Transición exclusivamente mediante crossfade de opacidad (sin desplazamientos ni saltos de CLS).
 * - Lazy-load y precarga progresiva secuencial de imágenes secundarias para no competir con el hilo de red principal.
 * - Respeto estricto de prefers-reduced-motion (solo imagen principal estática, sin timers ni listeners).
 * - Limpieza integral de observers, intervals y listeners compatible con Astro View Transitions.
 */

interface CardGallery {
  card: HTMLElement;
  images: HTMLImageElement[];
  startDesktopTimer: () => void;
  stopDesktopTimer: () => void;
  startMobileTimer: () => void;
  pauseMobileTimer: () => void;
  preloadProgressively: () => Promise<void>;
  syncMode: () => void;
  destroy: () => void;
}

const DESKTOP_INTERVAL_MS = 2200;
const MOBILE_INTERVAL_MS = 3000;
const TRANSITION_BUFFER_MS = 750;

export interface CardGalleryOptions {
  cardSelector?: string;
  desktopIntervalMs?: number;
  mobileIntervalMs?: number;
  transitionBufferMs?: number;
}

export function setupCardGalleries(options: CardGalleryOptions = {}): () => void {
  const {
    cardSelector = "[data-service-card]",
    desktopIntervalMs = DESKTOP_INTERVAL_MS,
    mobileIntervalMs = MOBILE_INTERVAL_MS,
    transitionBufferMs = TRANSITION_BUFFER_MS,
  } = options;

  if (typeof window === "undefined") return () => {};

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) {
    return () => {};
  }

  const cards = Array.from(document.querySelectorAll<HTMLElement>(cardSelector));
  if (cards.length === 0) return () => {};

  const isTouchDevice = () => window.matchMedia("(hover: none), (pointer: coarse)").matches;

  const cardGalleries = new Map<HTMLElement, CardGallery>();

  // Observer para precarga progresiva anticipada (a 250px del viewport)
  const preloadObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const card = entry.target as HTMLElement;
          const gallery = cardGalleries.get(card);
          if (gallery) {
            void gallery.preloadProgressively();
            preloadObserver.unobserve(card);
          }
        }
      }
    },
    { rootMargin: "250px 0px" }
  );

  // Observer para rotación en mobile/tablet cuando la card es visible
  const viewportObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const card = entry.target as HTMLElement;
        const gallery = cardGalleries.get(card);
        if (!gallery) continue;

        if (entry.isIntersecting) {
          if (isTouchDevice()) {
            gallery.startMobileTimer();
          }
        } else {
          gallery.pauseMobileTimer();
        }
      }
    },
    { threshold: 0.25 }
  );

  const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
  const handleMediaChange = () => {
    cardGalleries.forEach((gallery) => gallery.syncMode());
  };
  mediaQuery.addEventListener("change", handleMediaChange);

  // Inicializar cada card
  cards.forEach((card) => {
    const images = Array.from(card.querySelectorAll<HTMLImageElement>("[data-gallery-item]"));
    if (images.length <= 1) return;

    let currentIndex = 0;
    let intervalId: number | null = null;
    let cleanupTimeoutId: number | null = null;
    let isHovered = false;
    let isVisibleInViewport = false;
    let preloadingStarted = false;

    const stopTimer = () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    const ensureImageSrc = (img: HTMLImageElement) => {
      const dataSrc = img.dataset.src;
      if (dataSrc && !img.src) {
        img.src = dataSrc;
        img.removeAttribute("data-src");
      }
    };

    const ensureAllImagesLoaded = () => {
      for (let i = 1; i < images.length; i++) {
        ensureImageSrc(images[i]);
      }
    };

    const preloadSingleImage = (img: HTMLImageElement): Promise<void> => {
      return new Promise((resolve) => {
        const dataSrc = img.dataset.src;
        if (!dataSrc || img.src) {
          resolve();
          return;
        }
        const onFinish = () => {
          img.removeEventListener("load", onFinish);
          img.removeEventListener("error", onFinish);
          resolve();
        };
        img.addEventListener("load", onFinish, { once: true });
        img.addEventListener("error", onFinish, { once: true });
        img.src = dataSrc;
        img.removeAttribute("data-src");
      });
    };

    const preloadProgressively = async () => {
      if (preloadingStarted) return;
      preloadingStarted = true;
      for (let i = 1; i < images.length; i++) {
        await preloadSingleImage(images[i]);
      }
    };

    const progressCircle = card.querySelector<SVGCircleElement>("[data-progress-circle]");
    const CIRCUMFERENCE = 59.6903;

    const updateProgressRing = (nextIndex: number, prevIndex = 0) => {
      if (!progressCircle) return;

      if (nextIndex === 0 && prevIndex > 0) {
        progressCircle.style.transition = "none";
        progressCircle.style.strokeDashoffset = CIRCUMFERENCE.toFixed(4);
        void progressCircle.getBoundingClientRect();
        progressCircle.style.transition = "";

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!progressCircle) return;
            const fraction = (nextIndex + 1) / images.length;
            const offset = CIRCUMFERENCE * (1 - fraction);
            progressCircle.style.strokeDashoffset = offset.toFixed(4);
          });
        });
        return;
      }

      const fraction = (nextIndex + 1) / images.length;
      const offset = CIRCUMFERENCE * (1 - fraction);
      progressCircle.style.strokeDashoffset = offset.toFixed(4);
    };

    const transitionTo = (nextIndex: number) => {
      if (nextIndex === currentIndex || nextIndex >= images.length) return;

      const currentEl = images[currentIndex];
      const nextEl = images[nextIndex];
      const previousIndex = currentIndex;

      ensureImageSrc(nextEl);
      updateProgressRing(nextIndex, previousIndex);

      if (cleanupTimeoutId !== null) {
        window.clearTimeout(cleanupTimeoutId);
        cleanupTimeoutId = null;
      }

      images.forEach((img, idx) => {
        if (idx !== currentIndex && idx !== nextIndex) {
          img.classList.remove("is-active", "is-previous");
        }
      });

      if (currentEl) {
        currentEl.classList.remove("is-active");
        currentEl.classList.add("is-previous");
      }

      if (nextEl) {
        nextEl.classList.add("is-active");
      }

      currentIndex = nextIndex;

      cleanupTimeoutId = window.setTimeout(() => {
        if (currentEl && currentEl !== images[currentIndex]) {
          currentEl.classList.remove("is-previous");
        }
        cleanupTimeoutId = null;
      }, transitionBufferMs);
    };

    const startDesktopTimer = () => {
      isHovered = true;
      stopTimer();
      ensureAllImagesLoaded();
      intervalId = window.setInterval(() => {
        const next = (currentIndex + 1) % images.length;
        transitionTo(next);
      }, desktopIntervalMs);
    };

    const stopDesktopTimer = () => {
      isHovered = false;
      stopTimer();
      transitionTo(0);
    };

    const startMobileTimer = () => {
      isVisibleInViewport = true;
      ensureAllImagesLoaded();
      if (intervalId !== null) return;
      intervalId = window.setInterval(() => {
        const next = (currentIndex + 1) % images.length;
        transitionTo(next);
      }, mobileIntervalMs);
    };

    const pauseMobileTimer = () => {
      isVisibleInViewport = false;
      stopTimer();
    };

    const syncMode = () => {
      stopTimer();
      if (isTouchDevice()) {
        if (isVisibleInViewport) {
          startMobileTimer();
        }
      } else {
        if (isHovered) {
          startDesktopTimer();
        } else {
          transitionTo(0);
        }
      }
    };

    // Listeners de hover para desktop
    const handleMouseEnter = () => {
      if (!isTouchDevice()) {
        startDesktopTimer();
      }
    };

    const handleMouseLeave = () => {
      if (!isTouchDevice()) {
        stopDesktopTimer();
      }
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    preloadObserver.observe(card);
    viewportObserver.observe(card);

    const destroy = () => {
      stopTimer();
      if (cleanupTimeoutId !== null) {
        window.clearTimeout(cleanupTimeoutId);
        cleanupTimeoutId = null;
      }
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      preloadObserver.unobserve(card);
      viewportObserver.unobserve(card);
      updateProgressRing(0);
    };

    cardGalleries.set(card, {
      card,
      images,
      startDesktopTimer,
      stopDesktopTimer,
      startMobileTimer,
      pauseMobileTimer,
      preloadProgressively,
      syncMode,
      destroy,
    });
  });

  return () => {
    mediaQuery.removeEventListener("change", handleMediaChange);
    preloadObserver.disconnect();
    viewportObserver.disconnect();
    cardGalleries.forEach((gallery) => gallery.destroy());
    cardGalleries.clear();
  };
}

export function setupServiceGalleries(): () => void {
  return setupCardGalleries({ cardSelector: "[data-service-card]" });
}

export function setupProjectNavGalleries(): () => void {
  return setupCardGalleries({ cardSelector: "[data-project-nav-card]" });
}
