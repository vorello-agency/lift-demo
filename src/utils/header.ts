import { initFocusTrap, toggleScrollLock } from "./a11y";

let cleanupHeader: (() => void) | null = null;

export function setupHeader(): void {
  cleanupHeader?.();
  cleanupHeader = null;

  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (!header) return;

  const controller = new AbortController();
  let destroyFocusTrap: (() => void) | null = null;
  let closeMenu: (() => void) | null = null;

  const desktopLinks = header.querySelectorAll<HTMLAnchorElement>(".nav-link[data-nav-anchor]");
  const mobileLinks = header.querySelectorAll<HTMLAnchorElement>(".mobile-nav-link[data-nav-anchor]");
  const trackedAnchors = ["projects", "services", "process", "about", "contact"];
  const sectionElements = trackedAnchors
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);

  let lastActiveAnchor: string | null = null;
  let isNavClickScrolling = false;
  let navScrollTimeout: ReturnType<typeof setTimeout> | null = null;

  const setActiveAnchor = (activeId: string | null) => {
    if (activeId === lastActiveAnchor) return;
    lastActiveAnchor = activeId;

    desktopLinks.forEach((link) => {
      const anchor = link.getAttribute("data-nav-anchor");
      if (activeId && anchor === activeId) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      }
    });

    mobileLinks.forEach((link) => {
      const anchor = link.getAttribute("data-nav-anchor");
      if (activeId && anchor === activeId) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      }
    });
  };

  const handleNavClick = (anchor: string) => {
    setActiveAnchor(anchor);
    isNavClickScrolling = true;
    if (navScrollTimeout) clearTimeout(navScrollTimeout);

    navScrollTimeout = setTimeout(() => {
      isNavClickScrolling = false;
      updateScrollspy(window.scrollY);
    }, 1200);
  };

  desktopLinks.forEach((link) => {
    const anchor = link.getAttribute("data-nav-anchor");
    if (anchor) {
      link.addEventListener("click", () => handleNavClick(anchor), {
        signal: controller.signal,
      });
    }
  });

  mobileLinks.forEach((link) => {
    const anchor = link.getAttribute("data-nav-anchor");
    if (anchor) {
      link.addEventListener("click", () => handleNavClick(anchor), {
        signal: controller.signal,
      });
    }
  });

  const updateScrollspy = (scrollY: number) => {
    if (isNavClickScrolling) return;
    if (sectionElements.length === 0) return;

    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const headerOffset = header.offsetHeight + 80;

    if (scrollY + windowHeight >= docHeight - 50) {
      setActiveAnchor("contact");
      return;
    }

    const firstSectionTop = sectionElements[0].offsetTop;
    if (scrollY + headerOffset < firstSectionTop) {
      setActiveAnchor(null);
      return;
    }

    let currentAnchor: string | null = null;
    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const sec = sectionElements[i];
      if (scrollY + headerOffset >= sec.offsetTop) {
        currentAnchor = sec.id;
        break;
      }
    }

    setActiveAnchor(currentAnchor);
  };

  const getIsDarkTheme = () =>
    header.getAttribute("data-theme") === "dark" ||
    document.documentElement.classList.contains("dark") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  let isScrolled = false;

  const handleScroll = () => {
    const heroEl = document.getElementById("hero");
    const scrollY = window.scrollY;
    const heroHeight = heroEl ? heroEl.offsetHeight - header.offsetHeight : window.innerHeight;
    const isDarkTheme = getIsDarkTheme();

    const progress = Math.min(1, Math.max(0, scrollY / heroHeight));

    if (progress <= 0.005) {
      header.style.setProperty("--header-bg-alpha", "0");
      header.style.setProperty("--header-backdrop", "none");
      header.style.setProperty("--header-border-alpha", "0");
    } else {
      header.style.setProperty("--header-bg-alpha", (progress * 0.85).toFixed(3));
      header.style.setProperty("--header-backdrop", `blur(${(progress * 14).toFixed(1)}px) saturate(160%)`);
      header.style.setProperty("--header-border-alpha", (progress * 0.6).toFixed(3));
    }

    if (isDarkTheme) {
      header.style.setProperty("--header-text-color", "#ffffff");
      header.style.setProperty("--header-active-color", "var(--color-lift-orange)");
      header.style.setProperty("--header-logo-white-opacity", "1");
      header.style.setProperty("--header-logo-color-opacity", "0");
    } else {
      const isPastQuarter = progress >= 0.25;
      header.style.setProperty("--header-text-color", isPastQuarter ? "#111214" : "#ffffff");
      header.style.setProperty(
        "--header-active-color",
        isPastQuarter ? "var(--color-lift-orange-dark, #C9471D)" : "var(--color-lift-orange)"
      );

      const logoFactor = Math.min(1, Math.max(0, (progress - 0.05) / 0.25));
      header.style.setProperty("--header-logo-white-opacity", (1 - logoFactor).toFixed(3));
      header.style.setProperty("--header-logo-color-opacity", logoFactor.toFixed(3));
    }

    const isPastHero = progress >= 0.85;
    if (isPastHero !== isScrolled) {
      isScrolled = isPastHero;
      if (isScrolled) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    updateScrollspy(scrollY);
  };

  let ticking = false;
  const onScroll = () => {
    if (isNavClickScrolling) {
      if (navScrollTimeout) clearTimeout(navScrollTimeout);
      navScrollTimeout = setTimeout(() => {
        isNavClickScrolling = false;
        updateScrollspy(window.scrollY);
      }, 120);
    }

    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  const cancelNavScrollLock = () => {
    if (isNavClickScrolling) {
      isNavClickScrolling = false;
      if (navScrollTimeout) clearTimeout(navScrollTimeout);
      updateScrollspy(window.scrollY);
    }
  };

  window.addEventListener("wheel", cancelNavScrollLock, {
    passive: true,
    signal: controller.signal,
  });
  window.addEventListener("touchstart", cancelNavScrollLock, {
    passive: true,
    signal: controller.signal,
  });
  window.addEventListener(
    "scrollend",
    () => {
      if (isNavClickScrolling) {
        isNavClickScrolling = false;
        if (navScrollTimeout) clearTimeout(navScrollTimeout);
        updateScrollspy(window.scrollY);
      }
    },
    { passive: true, signal: controller.signal }
  );

  window.addEventListener("scroll", onScroll, {
    passive: true,
    signal: controller.signal,
  });

  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  colorSchemeQuery.addEventListener("change", handleScroll, {
    signal: controller.signal,
  });

  handleScroll();

  if (menuToggle && mobileMenu) {
    let isOpen = false;

    const openMenu = () => {
      isOpen = true;
      header.classList.add("menu-is-open");
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "Cerrar menú de navegación");
      mobileMenu.classList.remove("translate-x-full", "pointer-events-none", "opacity-0");
      mobileMenu.classList.add("translate-x-0", "pointer-events-auto", "opacity-100");
      mobileMenu.setAttribute("aria-hidden", "false");
      mobileMenu.removeAttribute("inert");
      toggleScrollLock(true);

      destroyFocusTrap = initFocusTrap(mobileMenu, menuToggle, closeMenu ?? (() => {}));

      const firstLink = mobileMenu.querySelector<HTMLElement>("a[href]");
      if (firstLink) firstLink.focus();
    };

    closeMenu = () => {
      isOpen = false;
      header.classList.remove("menu-is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
      mobileMenu.classList.add("translate-x-full", "pointer-events-none", "opacity-0");
      mobileMenu.classList.remove("translate-x-0", "pointer-events-auto", "opacity-100");
      mobileMenu.setAttribute("aria-hidden", "true");
      mobileMenu.setAttribute("inert", "");
      toggleScrollLock(false);

      if (destroyFocusTrap) {
        destroyFocusTrap();
        destroyFocusTrap = null;
      }
    };

    menuToggle.addEventListener(
      "click",
      () => {
        if (isOpen) {
          closeMenu?.();
        } else {
          openMenu();
        }
      },
      { signal: controller.signal }
    );

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => closeMenu?.(), {
        signal: controller.signal,
      });
    });
  }

  cleanupHeader = () => {
    if (navScrollTimeout) clearTimeout(navScrollTimeout);
    closeMenu?.();
    destroyFocusTrap?.();
    destroyFocusTrap = null;
    toggleScrollLock(false);
    controller.abort();
  };
}

export function destroyHeader(): void {
  cleanupHeader?.();
  cleanupHeader = null;
}
