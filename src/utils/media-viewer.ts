import { initFocusTrap, toggleScrollLock } from "./a11y";

interface SlideData {
  title: string;
  type: string;
  caption: string;
  credit: string;
}

let cleanupFunctions: Array<() => void> = [];

export function setupMediaViewers(): void {
  cleanupMediaViewers();

  const controller = new AbortController();

  document.querySelectorAll<HTMLDialogElement>("[data-media-viewer]").forEach((dialog) => {
    const triggerAttr = dialog.dataset.triggerAttr;
    if (!triggerAttr) return;

    const triggers = document.querySelectorAll<HTMLElement>(`[${triggerAttr}]`);
    if (triggers.length === 0) return;

    const slides = dialog.querySelectorAll<HTMLElement>("[data-viewer-slide]");
    const totalSlides = slides.length;
    if (totalSlides === 0) return;

    const counterEl = dialog.querySelector<HTMLElement>("[data-viewer-counter]");
    const announcerEl = dialog.querySelector<HTMLElement>("[data-viewer-announcer]");
    const headerTitleEl = dialog.querySelector<HTMLElement>("[data-viewer-header-title]");
    const footerTypeEl = dialog.querySelector<HTMLElement>("[data-viewer-footer-type]");
    const footerTitleEl = dialog.querySelector<HTMLElement>("[data-viewer-footer-title]");
    const footerCaptionEl = dialog.querySelector<HTMLElement>("[data-viewer-footer-caption]");
    const footerCreditsContainer = dialog.querySelector<HTMLElement>("[data-viewer-footer-credits]");
    const footerCreditTextEl = dialog.querySelector<HTMLElement>("[data-viewer-footer-credit-text]");
    const closeBtn = dialog.querySelector<HTMLButtonElement>("[data-viewer-close]");
    const prevBtn = dialog.querySelector<HTMLButtonElement>("[data-viewer-prev]");
    const nextBtn = dialog.querySelector<HTMLButtonElement>("[data-viewer-next]");

    const slidesData: SlideData[] = Array.from(slides).map((slideEl) => ({
      title: slideEl.dataset.slideTitle ?? "",
      type: slideEl.dataset.slideType ?? "",
      caption: slideEl.dataset.slideCaption ?? "",
      credit: slideEl.dataset.slideCredit ?? "",
    }));

    let currentIndex = 0;
    let lastTrigger: HTMLElement | null = null;
    let destroyFocusTrap: (() => void) | null = null;

    const loadSlideImage = (index: number, priority = false) => {
      const slide = slides[index];
      const image = slide?.querySelector<HTMLImageElement>("[data-viewer-image]");

      if (!image || image.src) return;

      const source = image.dataset.src;
      const sourceSet = image.dataset.srcset;
      if (!source) return;

      image.sizes = "(min-width: 640px) 85vw, 92vw";
      if (sourceSet) image.srcset = sourceSet;
      image.loading = priority ? "eager" : "lazy";
      image.fetchPriority = priority ? "high" : "low";
      image.src = source;
    };

    const preloadAdjacentSlides = (index: number) => {
      if (totalSlides < 2) return;

      window.requestIdleCallback?.(() => {
        loadSlideImage((index + 1) % totalSlides);
        loadSlideImage((index - 1 + totalSlides) % totalSlides);
      });
    };

    const updateSlideUI = (index: number) => {
      currentIndex = (index + totalSlides) % totalSlides;
      loadSlideImage(currentIndex, true);
      preloadAdjacentSlides(currentIndex);

      slides.forEach((slide, i) => {
        const isActive = i === currentIndex;
        if (isActive) {
          slide.classList.remove("opacity-0", "scale-[0.98]", "z-0", "pointer-events-none");
          slide.classList.add("opacity-100", "scale-100", "z-10", "pointer-events-auto");
          slide.setAttribute("aria-hidden", "false");
        } else {
          slide.classList.remove("opacity-100", "scale-100", "z-10", "pointer-events-auto");
          slide.classList.add("opacity-0", "scale-[0.98]", "z-0", "pointer-events-none");
          slide.setAttribute("aria-hidden", "true");
        }
      });

      const currentData = slidesData[currentIndex];

      if (counterEl) {
        const currentStr = String(currentIndex + 1).padStart(2, "0");
        const totalStr = String(totalSlides).padStart(2, "0");
        counterEl.textContent = `${currentStr} / ${totalStr}`;
      }

      if (announcerEl) {
        const titleStr = currentData?.title || currentData?.type || "Elemento visual";
        announcerEl.textContent = `Mostrando ${currentIndex + 1} de ${totalSlides}: ${titleStr}`;
      }

      if (headerTitleEl) {
        headerTitleEl.textContent = currentData?.title || currentData?.type || "";
      }

      if (footerTypeEl) {
        if (currentData?.type) {
          footerTypeEl.textContent = currentData.type;
          footerTypeEl.classList.remove("hidden");
        } else {
          footerTypeEl.classList.add("hidden");
        }
      }

      if (footerTitleEl) {
        if (currentData?.title) {
          footerTitleEl.textContent = currentData.title;
          footerTitleEl.classList.remove("hidden");
        } else {
          footerTitleEl.classList.add("hidden");
        }
      }

      if (footerCaptionEl) {
        if (currentData?.caption) {
          footerCaptionEl.textContent = currentData.caption;
          footerCaptionEl.classList.remove("hidden");
        } else {
          footerCaptionEl.classList.add("hidden");
        }
      }

      if (footerCreditTextEl) {
        if (currentData?.credit) {
          footerCreditTextEl.textContent = currentData.credit;
          footerCreditTextEl.classList.remove("hidden");
        } else {
          footerCreditTextEl.classList.add("hidden");
        }
      }

      if (footerCreditsContainer) {
        if (!currentData?.credit) {
          footerCreditsContainer.classList.add("hidden");
        } else {
          footerCreditsContainer.classList.remove("hidden");
        }
      }
    };

    const openViewer = (index: number, triggerEl: HTMLElement) => {
      lastTrigger = triggerEl;
      updateSlideUI(index);
      dialog.showModal();
      toggleScrollLock(true);

      if (lastTrigger) {
        destroyFocusTrap = initFocusTrap(dialog, lastTrigger, closeViewer);
      }
      if (closeBtn) {
        closeBtn.focus();
      }
    };

    const closeViewer = () => {
      if (!dialog.open) return;
      destroyFocusTrap?.();
      destroyFocusTrap = null;
      toggleScrollLock(false);
      dialog.close();
      lastTrigger?.focus();
    };

    const nextSlide = () => updateSlideUI(currentIndex + 1);
    const prevSlide = () => updateSlideUI(currentIndex - 1);

    triggers.forEach((trigger) => {
      trigger.addEventListener(
        "click",
        () => {
          const val = trigger.getAttribute(triggerAttr);
          const targetIndex = val ? parseInt(val, 10) : 0;
          openViewer(isNaN(targetIndex) ? 0 : targetIndex, trigger);
        },
        { signal: controller.signal }
      );
    });

    closeBtn?.addEventListener("click", closeViewer, {
      signal: controller.signal,
    });
    prevBtn?.addEventListener("click", prevSlide, {
      signal: controller.signal,
    });
    nextBtn?.addEventListener("click", nextSlide, {
      signal: controller.signal,
    });

    dialog.addEventListener(
      "keydown",
      (e) => {
        if (!dialog.open) return;
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          prevSlide();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          nextSlide();
        }
      },
      { signal: controller.signal }
    );

    dialog.addEventListener("close", () => closeViewer(), {
      signal: controller.signal,
    });

    dialog.addEventListener(
      "click",
      (e) => {
        if (e.target === dialog) {
          closeViewer();
        }
      },
      { signal: controller.signal }
    );

    let touchStartX = 0;
    let touchStartY = 0;

    dialog.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      },
      { passive: true, signal: controller.signal }
    );

    dialog.addEventListener(
      "touchend",
      (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
          if (deltaX < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
      },
      { passive: true, signal: controller.signal }
    );
  });

  cleanupFunctions.push(() => controller.abort());
}

export function cleanupMediaViewers(): void {
  cleanupFunctions.forEach((fn) => fn());
  cleanupFunctions = [];
}
