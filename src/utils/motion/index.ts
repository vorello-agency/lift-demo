type MotionCleanup = () => void;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

let pageController: AbortController | null = null;
const pageCleanups = new Set<MotionCleanup>();

export function prefersReducedMotion(): boolean {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function getMotionSignal(): AbortSignal | null {
  return pageController?.signal ?? null;
}

export function registerMotionCleanup(cleanup: MotionCleanup): MotionCleanup {
  pageCleanups.add(cleanup);

  return () => {
    pageCleanups.delete(cleanup);
  };
}

function destroyPageMotion(): void {
  pageController?.abort();
  pageController = null;

  pageCleanups.forEach((cleanup) => cleanup());
  pageCleanups.clear();

  document.documentElement.removeAttribute("data-motion");
}

async function initializePageMotion(): Promise<void> {
  destroyPageMotion();

  const controller = new AbortController();
  pageController = controller;
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);

  document.documentElement.dataset.motion = mediaQuery.matches ? "reduced" : "ready";

  mediaQuery.addEventListener("change", () => void initializePageMotion(), {
    signal: controller.signal,
  });

  const hasHomeMotion = document.querySelector(
    "[data-motion-manifesto], [data-motion-projects-header], [data-motion-project-card], [data-motion-reveal], [data-motion-reveal-group]"
  );
  const hasProjectMotion = document.querySelector(
    "[data-motion-project-reveal], [data-motion-project-group], [data-motion-gallery-item], [data-motion-gallery-group]"
  );

  if (mediaQuery.matches || (!hasHomeMotion && !hasProjectMotion)) {
    return;
  }

  const pageBody = document.body;

  if (hasHomeMotion) {
    const { setupHomeMotion } = await import("./home");

    if (controller.signal.aborted || document.body !== pageBody) return;
    registerMotionCleanup(setupHomeMotion(controller.signal));
  }

  if (hasProjectMotion) {
    const { setupProjectMotion } = await import("./project");

    if (controller.signal.aborted || document.body !== pageBody) return;
    registerMotionCleanup(setupProjectMotion(controller.signal));
  }
}

document.addEventListener("astro:page-load", () => void initializePageMotion());
document.addEventListener("astro:before-swap", destroyPageMotion);

export * from "./core";
