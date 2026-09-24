import { animate, inView, stagger } from "motion";
import { EDITORIAL_EASE, createMotionContext } from "./core";

export function setupHomeMotion(signal: AbortSignal): () => void {
  const manifesto = document.querySelector<HTMLElement>("[data-motion-manifesto]");
  const projectsHeader = document.querySelector<HTMLElement>("[data-motion-projects-header]");
  const projectCards = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-project-card]"));
  const editorialReveals = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-reveal]"));
  const editorialRevealGroups = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-reveal-group]"));

  if (
    !manifesto &&
    !projectsHeader &&
    projectCards.length === 0 &&
    editorialReveals.length === 0 &&
    editorialRevealGroups.length === 0
  ) {
    return () => {};
  }

  const ctx = createMotionContext(signal);

  if (manifesto) {
    const eyebrow = manifesto.querySelector<HTMLElement>("[data-motion-manifesto-eyebrow]");
    const quote = manifesto.querySelector<HTMLElement>("[data-motion-manifesto-quote]");
    const clauses = Array.from(manifesto.querySelectorAll<HTMLElement>("[data-motion-manifesto-clause]"));
    const marquee = manifesto.querySelector<HTMLElement>("[data-motion-manifesto-marquee]");

    ctx.prepare(eyebrow, {
      opacity: "0",
      transform: "translateY(12px)",
      willChange: "opacity, transform",
    });
    ctx.prepare(quote, {
      transform: "translateY(24px)",
      willChange: "transform",
    });
    clauses.forEach((clause) => {
      ctx.prepare(clause, { opacity: "0", willChange: "opacity" });
    });
    ctx.prepare(marquee, {
      opacity: "0",
      transform: "translateY(10px)",
      willChange: "opacity, transform",
    });

    ctx.addObserver(
      inView(
        manifesto,
        () => {
          if (signal.aborted) return;

          if (eyebrow) {
            ctx.trackAnimation(
              animate(
                eyebrow,
                {
                  opacity: [0, 1],
                  transform: ["translateY(12px)", "translateY(0px)"],
                },
                { duration: 0.65, ease: EDITORIAL_EASE }
              ),
              [eyebrow]
            );
          }

          if (quote) {
            ctx.trackAnimation(
              animate(
                quote,
                {
                  transform: ["translateY(24px)", "translateY(0px)"],
                },
                { duration: 0.95, delay: 0.08, ease: EDITORIAL_EASE }
              ),
              [quote]
            );
          }

          if (clauses.length > 0) {
            ctx.trackAnimation(
              animate(
                clauses,
                { opacity: [0, 1] },
                {
                  duration: 0.72,
                  delay: stagger(0.16, { startDelay: 0.14 }),
                  ease: EDITORIAL_EASE,
                }
              ),
              clauses
            );
          }

          if (marquee) {
            ctx.trackAnimation(
              animate(
                marquee,
                {
                  opacity: [0, 1],
                  transform: ["translateY(10px)", "translateY(0px)"],
                },
                { duration: 0.8, delay: 0.72, ease: EDITORIAL_EASE }
              ),
              [marquee]
            );
          }
        },
        { amount: 0.2, margin: "0px 0px -8% 0px" }
      )
    );
  }

  if (projectsHeader) {
    ctx.prepare(projectsHeader, {
      opacity: "0",
      transform: "translateY(18px)",
      willChange: "opacity, transform",
    });

    ctx.addObserver(
      inView(
        projectsHeader,
        () => {
          if (signal.aborted) return;

          ctx.trackAnimation(
            animate(
              projectsHeader,
              {
                opacity: [0, 1],
                transform: ["translateY(18px)", "translateY(0px)"],
              },
              { duration: 0.62, ease: EDITORIAL_EASE }
            ),
            [projectsHeader]
          );
        },
        { amount: 0.45, margin: "0px 0px -8% 0px" }
      )
    );
  }

  projectCards.forEach((card, fallbackIndex) => {
    const media = card.querySelector<HTMLElement>("[data-motion-project-media]");
    const parsedOrder = Number(card.dataset.motionOrder);
    const order = Number.isFinite(parsedOrder) ? parsedOrder : fallbackIndex;
    const fourthCardDelay = order === 3 ? 0.2 : 0;
    const delay = Math.min(order, 3) * 0.1 + fourthCardDelay;

    ctx.prepare(card, {
      opacity: "0",
      transform: "translateY(30px)",
      willChange: "opacity, transform",
    });
    ctx.prepare(media, {
      transform: "scale(0.985)",
      willChange: "transform",
    });

    ctx.addObserver(
      inView(
        card,
        () => {
          if (signal.aborted) return;

          ctx.trackAnimation(
            animate(
              card,
              {
                opacity: [0, 1],
                transform: ["translateY(30px)", "translateY(0px)"],
              },
              { duration: 0.72, delay, ease: EDITORIAL_EASE }
            ),
            [card]
          );

          if (media) {
            ctx.trackAnimation(
              animate(
                media,
                { transform: ["scale(0.985)", "scale(1)"] },
                {
                  duration: 0.85,
                  delay: delay + 0.04,
                  ease: EDITORIAL_EASE,
                }
              ),
              [media]
            );
          }
        },
        { amount: 0.28, margin: "0px 0px -16% 0px" }
      )
    );
  });

  editorialReveals.forEach((element) => {
    const parsedDelay = Number(element.dataset.motionDelay);
    const delay = Number.isFinite(parsedDelay) ? parsedDelay : 0;

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
              { duration: 0.72, delay, ease: EDITORIAL_EASE }
            ),
            [element]
          );
        },
        { amount: 0.18, margin: "0px 0px -12% 0px" }
      )
    );
  });

  editorialRevealGroups.forEach((group) => {
    const items = Array.from(group.children).filter((child): child is HTMLElement => child instanceof HTMLElement);

    if (items.length === 0) return;

    items.forEach((item) => {
      ctx.prepare(item, {
        opacity: "0",
        transform: "translateY(24px)",
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
                transform: ["translateY(24px)", "translateY(0px)"],
              },
              {
                duration: 0.72,
                delay: stagger(0.12),
                ease: EDITORIAL_EASE,
              }
            ),
            items
          );
        },
        { amount: 0.12, margin: "0px 0px -12% 0px" }
      )
    );
  });

  return ctx.cleanup;
}
