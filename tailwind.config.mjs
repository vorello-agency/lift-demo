/** @type {import('tailwindcss').Config} */
export default {
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
