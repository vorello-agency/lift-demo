import type { AnimationPlaybackControlsWithThen } from "motion";

export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export interface InlineMotionStyles {
  opacity: string;
  transform: string;
  willChange: string;
}

export interface MotionContext {
  prepare: (element: HTMLElement | null | undefined, styles: Partial<InlineMotionStyles>) => void;
  trackAnimation: (animation: AnimationPlaybackControlsWithThen, elements: HTMLElement[]) => void;
  addObserver: (disconnect: () => void) => void;
  cleanup: () => void;
}

/**
 * Crea un contexto de motion para una página o sección.
 * Gestiona el rastreo de animaciones, observadores inView y la restauración
 * de estilos originales al abortar o desmontar la vista.
 */
export function createMotionContext(signal: AbortSignal): MotionContext {
  const animations: AnimationPlaybackControlsWithThen[] = [];
  const observers: Array<() => void> = [];
  const originalStyles = new Map<HTMLElement, InlineMotionStyles>();
  let isCleanedUp = false;

  const prepare = (element: HTMLElement | null | undefined, styles: Partial<InlineMotionStyles>) => {
    if (!element) return;

    if (!originalStyles.has(element)) {
      originalStyles.set(element, {
        opacity: element.style.opacity,
        transform: element.style.transform,
        willChange: element.style.willChange,
      });
    }

    if (styles.opacity !== undefined) element.style.opacity = styles.opacity;
    if (styles.transform !== undefined) {
      element.style.transform = styles.transform;
    }
    if (styles.willChange !== undefined) {
      element.style.willChange = styles.willChange;
    }
  };

  const trackAnimation = (animation: AnimationPlaybackControlsWithThen, elements: HTMLElement[]) => {
    animations.push(animation);

    void animation.then(() => {
      if (isCleanedUp) return;

      elements.forEach((element) => {
        const styles = originalStyles.get(element);
        if (styles) element.style.willChange = styles.willChange;
      });
    });
  };

  const addObserver = (disconnect: () => void) => {
    observers.push(disconnect);
  };

  const cleanup = () => {
    if (isCleanedUp) return;
    isCleanedUp = true;

    observers.forEach((disconnect) => disconnect());
    animations.forEach((animation) => animation.stop());

    originalStyles.forEach((styles, element) => {
      element.style.opacity = styles.opacity;
      element.style.transform = styles.transform;
      element.style.willChange = styles.willChange;
    });
    originalStyles.clear();
  };

  signal.addEventListener("abort", cleanup, { once: true });

  return {
    prepare,
    trackAnimation,
    addObserver,
    cleanup,
  };
}
