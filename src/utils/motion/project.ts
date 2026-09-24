import { animate, inView, stagger } from "motion";
import { EDITORIAL_EASE, createMotionContext } from "./core";

export function setupProjectMotion(signal: AbortSignal): () => void {
  const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-project-reveal]"));
  const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-project-group]"));
  const galleryItems = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-gallery-item]"));
  const galleryGroups = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-gallery-group]"));

  if (reveals.length === 0 && groups.length === 0 && galleryItems.length === 0 && galleryGroups.length === 0) {
    return () => {};
  }

  const ctx = createMotionContext(signal);

  reveals.forEach((element) => {
    ctx.prepare(element, {
      opacity: "0",
      transform: "translateY(22px)",
      willChange: "opacity, transform",
    });

    ctx.addObserver(
      inView(
        element,
        () => {
          if (signal.aborted) return;

          ctx.trackAnimation(
            animate(
              element,
              {
                opacity: [0, 1],
                transform: ["translateY(22px)", "translateY(0px)"],
              },
              { duration: 0.72, ease: EDITORIAL_EASE }
            ),
            [element]
          );
        },
        { amount: 0.24, margin: "0px 0px -12% 0px" }
      )
    );
  });

  groups.forEach((group) => {
    const items = Array.from(group.children).filter((child): child is HTMLElement => child instanceof HTMLElement);

    if (items.length === 0) return;

    items.forEach((item) => {
      ctx.prepare(item, {
        opacity: "0",
        transform: "translateY(20px)",
        willChange: "opacity, transform",
      });
    });

    ctx.addObserver(
      inView(
        group,
        () => {
          if (signal.aborted) return;

          ctx.trackAnimation(
            animate(
              items,
              {
                opacity: [0, 1],
                transform: ["translateY(20px)", "translateY(0px)"],
              },
              {
                duration: 0.7,
                delay: stagger(0.12),
                ease: EDITORIAL_EASE,
              }
            ),
            items
          );
        },
        { amount: 0.16, margin: "0px 0px -12% 0px" }
      )
    );
  });

  const animateGalleryItem = (element: HTMLElement, delay = 0) =>
    animate(
      element,
      {
        opacity: [0, 1],
        transform: ["translateY(26px) scale(0.99)", "translateY(0px) scale(1)"],
      },
      { duration: 0.82, delay, ease: EDITORIAL_EASE }
    );

  galleryItems.forEach((element) => {
    ctx.prepare(element, {
      opacity: "0",
      transform: "translateY(26px) scale(0.99)",
      willChange: "opacity, transform",
    });

    ctx.addObserver(
      inView(
        element,
        () => {
          if (signal.aborted) return;
          ctx.trackAnimation(animateGalleryItem(element), [element]);
        },
        { amount: 0.2, margin: "0px 0px -14% 0px" }
      )
    );
  });

  galleryGroups.forEach((group) => {
    const items = Array.from(group.children).filter((child): child is HTMLElement => child instanceof HTMLElement);

    if (items.length === 0) return;

    items.forEach((item) => {
      ctx.prepare(item, {
        opacity: "0",
        transform: "translateY(26px) scale(0.99)",
        willChange: "opacity, transform",
      });
    });

    ctx.addObserver(
      inView(
        group,
        () => {
          if (signal.aborted) return;

          const groupAnimations = items.map((item, index) => animateGalleryItem(item, index * 0.14));
          groupAnimations.forEach((animation, index) => {
            ctx.trackAnimation(animation, [items[index]]);
          });
        },
        { amount: 0.14, margin: "0px 0px -14% 0px" }
      )
    );
  });

  return ctx.cleanup;
}
