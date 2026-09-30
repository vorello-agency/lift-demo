let cleanupContactForm: (() => void) | null = null;

/**
 * Actualiza el estado visual del input y del mensaje de error para accesibilidad (a11y).
 */
function toggleInputState(input: HTMLElement, errorElement: HTMLElement | null, hasError: boolean): void {
  if (hasError) {
    errorElement?.classList.remove("hidden");
    input.setAttribute("aria-invalid", "true");
  } else {
    errorElement?.classList.add("hidden");
    input.setAttribute("aria-invalid", "false");
  }
}

/**
 * Valida si un campo input o textarea tiene contenido (requerido).
 */
export function validateRequired(
  input: HTMLInputElement | HTMLTextAreaElement | null,
  errorElement: HTMLElement | null
): boolean {
  if (!input) return false;
  const isValid = input.value.trim() !== "";
  toggleInputState(input, errorElement, !isValid);
  return isValid;
}

/**
 * Valida si un campo email es válido y no está vacío.
 */
export function validateEmail(input: HTMLInputElement | null, errorElement: HTMLElement | null): boolean {
  if (!input) return false;
  const isValid = input.value.trim() !== "" && input.validity.valid;
  toggleInputState(input, errorElement, !isValid);
  return isValid;
}

export function initContactForm(): void {
  cleanupContactForm?.();
  cleanupContactForm = null;

  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const feedback = document.getElementById("form-feedback");

  if (!form) return;

  const controller = new AbortController();

  function setupPillGroup(containerId: string, hiddenInputId: string, errorId?: string) {
    const container = document.getElementById(containerId);
    const hiddenInput = document.getElementById(hiddenInputId) as HTMLInputElement | null;
    const errorEl = errorId ? document.getElementById(errorId) : null;

    if (!container || !hiddenInput) return;

    const pills = Array.from(container.querySelectorAll<HTMLButtonElement>("button.pill-btn"));

    const selectPill = (pill: HTMLButtonElement) => {
      const val = pill.getAttribute("data-value") || "";
      const isAlreadySelected = pill.getAttribute("aria-checked") === "true";

      pills.forEach((p) => {
        p.setAttribute("aria-checked", "false");
        p.classList.remove(
          "bg-lift-orange-dark",
          "text-white",
          "border-lift-orange-dark",
          "font-semibold",
          "shadow-sm",
          "dark:bg-lift-orange-dark",
          "dark:text-white",
          "dark:border-lift-orange-dark"
        );
        p.classList.add(
          "bg-white",
          "text-ink",
          "border-concrete/60",
          "dark:bg-dark-surface",
          "dark:text-chalk/90",
          "dark:border-white/[0.12]"
        );

        const checkIcon = p.querySelector(".pill-check-icon");
        if (checkIcon) {
          checkIcon.classList.add("hidden", "opacity-0", "scale-50");
          checkIcon.classList.remove("opacity-100", "scale-100");
        }
      });

      if (isAlreadySelected) {
        hiddenInput.value = "";
      } else {
        hiddenInput.value = val;
        if (errorEl) errorEl.classList.add("hidden");

        pill.setAttribute("aria-checked", "true");
        pill.classList.remove(
          "bg-white",
          "text-ink",
          "border-concrete/60",
          "dark:bg-dark-surface",
          "dark:text-chalk/90",
          "dark:border-white/[0.12]"
        );
        pill.classList.add(
          "bg-lift-orange-dark",
          "text-white",
          "border-lift-orange-dark",
          "font-semibold",
          "shadow-sm",
          "dark:bg-lift-orange-dark",
          "dark:text-white",
          "dark:border-lift-orange-dark"
        );

        const activeCheckIcon = pill.querySelector(".pill-check-icon");
        if (activeCheckIcon) {
          activeCheckIcon.classList.remove("hidden");
          requestAnimationFrame(() => {
            if (controller.signal.aborted) return;
            activeCheckIcon.classList.remove("opacity-0", "scale-50");
            activeCheckIcon.classList.add("opacity-100", "scale-100");
          });
        }
      }
    };

    pills.forEach((pill, index) => {
      pill.addEventListener("click", () => selectPill(pill), { signal: controller.signal });

      pill.addEventListener(
        "keydown",
        (e) => {
          let targetIndex = -1;

          if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            targetIndex = (index + 1) % pills.length;
          } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            targetIndex = (index - 1 + pills.length) % pills.length;
          } else if (e.key === "Home") {
            e.preventDefault();
            targetIndex = 0;
          } else if (e.key === "End") {
            e.preventDefault();
            targetIndex = pills.length - 1;
          }

          if (targetIndex >= 0 && pills[targetIndex]) {
            pills[targetIndex].focus();
          }
        },
        { signal: controller.signal }
      );
    });
  }

  setupPillGroup("project-type-pills", "contact-project-type", "type-error");
  setupPillGroup("scale-pills", "contact-scale");

  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("contact-name") as HTMLInputElement | null;
      const emailInput = document.getElementById("contact-email") as HTMLInputElement | null;
      const typeSelect = document.getElementById("contact-project-type") as HTMLInputElement | null;
      const messageInput = document.getElementById("contact-message") as HTMLTextAreaElement | null;

      const nameError = document.getElementById("name-error");
      const emailError = document.getElementById("email-error");
      const typeError = document.getElementById("type-error");
      const messageError = document.getElementById("message-error");

      const isNameValid = validateRequired(nameInput, nameError);
      const isEmailValid = validateEmail(emailInput, emailError);
      const isTypeValid = validateRequired(typeSelect, typeError);
      const isMessageValid = validateRequired(messageInput, messageError);

      const isValid = isNameValid && isEmailValid && isTypeValid && isMessageValid;

      if (isValid && feedback) {
        feedback.classList.remove("hidden");
        feedback.classList.add("flex");
        form.reset();

        form.querySelectorAll<HTMLButtonElement>(".pill-btn").forEach((p) => {
          p.setAttribute("aria-checked", "false");
          p.classList.remove(
            "bg-lift-orange-dark",
            "text-white",
            "border-lift-orange-dark",
            "font-semibold",
            "shadow-sm"
          );
          p.classList.add("bg-white", "text-ink", "border-concrete/60");

          const checkIcon = p.querySelector(".pill-check-icon");
          if (checkIcon) {
            checkIcon.classList.add("hidden", "opacity-0", "scale-50");
            checkIcon.classList.remove("opacity-100", "scale-100");
          }
        });
      }
    },
    { signal: controller.signal }
  );

  cleanupContactForm = () => {
    controller.abort();
  };
}

export function cleanupContactFormInstance(): void {
  cleanupContactForm?.();
  cleanupContactForm = null;
}
