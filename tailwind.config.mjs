/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink-rgb) / <alpha-value>)",
        "warm-white": "rgb(var(--color-warm-white-rgb) / <alpha-value>)",
        concrete: "rgb(var(--color-concrete-rgb) / <alpha-value>)",
        slate: "rgb(var(--color-slate-rgb) / <alpha-value>)",
        charcoal: "rgb(var(--color-charcoal-rgb) / <alpha-value>)",
        "lift-orange": "rgb(var(--color-lift-orange-rgb) / <alpha-value>)",
        "lift-orange-dark": "rgb(var(--color-orange-dark-rgb) / <alpha-value>)",
        "safety-amber": "rgb(var(--color-safety-amber-rgb) / <alpha-value>)",
        subtle: "rgb(var(--color-subtle-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",

        // Architectural Dark Palette (System Design)
        obsidian: "rgb(var(--color-obsidian-rgb) / <alpha-value>)",
        "dark-surface": "rgb(var(--color-dark-surface-rgb) / <alpha-value>)",
        "dark-subtle": "rgb(var(--color-dark-subtle-rgb) / <alpha-value>)",
        "dark-elevated": "rgb(var(--color-dark-elevated-rgb) / <alpha-value>)",
        "dark-muted": "rgb(var(--color-dark-muted-rgb) / <alpha-value>)",
        "dark-border": "rgb(var(--color-dark-border-rgb) / var(--tw-border-opacity, 0.08))",
        chalk: "rgb(var(--color-chalk-rgb) / <alpha-value>)",
        ash: "rgb(var(--color-ash-rgb) / <alpha-value>)",
        "lift-orange-glow": "rgb(var(--color-lift-orange-glow-rgb) / <alpha-value>)",

        // Functional Semantic Tokens
        "bg-main": "rgb(var(--color-bg-main-rgb) / <alpha-value>)",
        "bg-surface": "rgb(var(--color-bg-surface-rgb) / <alpha-value>)",
        "bg-subtle": "rgb(var(--color-bg-subtle-rgb) / <alpha-value>)",
        "bg-muted": "rgb(var(--color-bg-muted-rgb) / <alpha-value>)",
        "text-main": "rgb(var(--color-text-main-rgb) / <alpha-value>)",
        "text-muted": "rgb(var(--color-text-muted-rgb) / <alpha-value>)",
        "text-inverse": "rgb(var(--color-text-inverse-rgb) / <alpha-value>)",
        "border-subtle": "rgb(var(--color-border-subtle-rgb) / <alpha-value>)",
        "border-medium": "rgb(var(--color-border-medium-rgb) / <alpha-value>)",
        "border-strong": "rgb(var(--color-border-strong-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        heading: ["Inter Tight", "DM Sans", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        site: "1360px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "6px",
        lg: "10px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(17, 18, 20, 0.05)",
        card: "0 4px 12px rgba(17, 18, 20, 0.04)",
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
        "4k": "2560px",
      },
    },
  },
  plugins: [],
};
