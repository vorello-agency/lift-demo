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

  const syncButtonUI = () => updateButtonUI(!video.paused && !video.ended);

  const loadSource = () => {
    if (lazyLoad && !video.src) {
      const source = video.dataset.src;
      if (source) {
        video.src = source;
        video.load();
      }
    }
  };

  const playVideo = () => {
    loadSource();
    void video.play().then(syncButtonUI).catch(syncButtonUI);
  };

  const loadAndPlay = () => {
    if (connection?.saveData || reduceMotion.matches) {
      video.pause();
      syncButtonUI();
      return;
    }
    playVideo();
  };

  const handleMotionChange = () => loadAndPlay();

  const onToggleClick = () => {
    if (video.paused || video.ended) {
      // Explicit playback stays available when automatic playback is disabled.
      playVideo();
    } else {
      video.pause();
      syncButtonUI();
    }
  };

  toggleBtn?.addEventListener("click", onToggleClick, { signal: controller.signal });
  for (const event of ["play", "playing", "pause", "ended", "emptied", "error"]) {
    video.addEventListener(event, syncButtonUI, { signal: controller.signal });
  }
  syncButtonUI();
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
