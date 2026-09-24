let originalPaddingRight = "";

/**
 * Bloquea o desbloquea el scroll del cuerpo de la página (Body),
 * compensando el ancho de la barra de desplazamiento para prevenir Layout Shift.
 */
export function toggleScrollLock(lock: boolean): void {
  if (lock) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      originalPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = originalPaddingRight;
    originalPaddingRight = "";
  }
}

/**
 * Crea un focus trap para un elemento contenedor y su elemento disparador.
 * Retorna una función para limpiar los listeners de eventos.
 */
export function initFocusTrap(container: HTMLElement, trigger: HTMLElement, onClose: () => void): () => void {
  const focusableSelector =
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [contenteditable="true"], [tabindex]:not([tabindex="-1"])';

  const getFocusableElements = (): HTMLElement[] => {
    const focusable = [trigger, ...container.querySelectorAll<HTMLElement>(focusableSelector)];
    return focusable.filter((el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el === trigger);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
      trigger.focus();
      return;
    }

    if (e.key === "Tab") {
      const focusables = getFocusableElements();
      if (focusables.length === 0) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}
