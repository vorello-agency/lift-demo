export interface AccessibleVideoOptions {
  video: HTMLVideoElement;
  toggleBtn?: HTMLButtonElement | null;
  lazyLoad?: boolean;
}

/**
 * Control accesible y unificado de video con soporte para:
 * - prefers-reduced-motion (respeto estricto a accesibilidad y pausa automática)
 * - IntersectionObserver (carga diferida cuando entra al viewport)
 * - navigator.connection.saveData (ahorro de datos móviles)
 * - Estados visuales y accesibles de botón Play/Pause (aria-label, aria-pressed)
 */
export function setupAccessibleVideo(options: AccessibleVideoOptions): () => void {
  const { video, toggleBtn, lazyLoad = false } = options;
  const controller = new AbortController();

  const playIcon = toggleBtn?.querySelector("[data-icon-play]");
  const pauseIcon = toggleBtn?.querySelector("[data-icon-pause]");
  const btnLabel = toggleBtn?.querySelector("[data-btn-label]");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean };
    }
  ).connection;

  const updateButtonUI = (isPlaying: boolean) => {
    if (!toggleBtn) return;
    if (isPlaying) {
      playIcon?.classList.add("hidden");
      pauseIcon?.classList.remove("hidden");
      toggleBtn.setAttribute("aria-label", "Pausar video");
      toggleBtn.setAttribute("aria-pressed", "true");
      if (btnLabel) btnLabel.textContent = "Pausar video";
    } else {
      playIcon?.classList.remove("hidden");
      pauseIcon?.classList.add("hidden");
      toggleBtn.setAttribute("aria-label", "Reproducir video");
      toggleBtn.setAttribute("aria-pressed", "false");
      if (btnLabel) btnLabel.textContent = "Reproducir video";
    }
  };

  const loadAndPlay = () => {
    if (connection?.saveData) return;

    if (lazyLoad && !video.src) {
      const source = video.dataset.src;
      if (source) {
        video.src = source;
        video.load();
      }
    }

    if (reduceMotion.matches) {
      video.pause();
      updateButtonUI(false);
    } else {
      void video.play().catch(() => undefined);
      updateButtonUI(true);
    }
  };

  const handleMotionChange = () => {
    if (reduceMotion.matches) {
      video.pause();
      updateButtonUI(false);
    } else {
      if (lazyLoad && !video.src) {
        loadAndPlay();
      } else {
        void video.play().catch(() => undefined);
        updateButtonUI(true);
      }
    }
  };

  const onToggleClick = () => {
    if (lazyLoad && !video.src) {
      loadAndPlay();
    }

    if (video.paused) {
      void video
        .play()
        .then(() => updateButtonUI(true))
        .catch(() => undefined);
    } else {
      video.pause();
      updateButtonUI(false);
    }
  };

  toggleBtn?.addEventListener("click", onToggleClick, { signal: controller.signal });
  video.addEventListener("play", () => updateButtonUI(true), { signal: controller.signal });
  video.addEventListener("pause", () => updateButtonUI(false), { signal: controller.signal });
  reduceMotion.addEventListener("change", handleMotionChange, { signal: controller.signal });

  if (lazyLoad && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        loadAndPlay();
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      controller.abort();
    };
  }

  loadAndPlay();
  return () => controller.abort();
}
