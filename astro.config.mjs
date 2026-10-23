import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  devToolbar: { enabled: false },
  site: process.env.SITE_URL || "https://lift-demo.vorelloagency.com",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    sitemap(),
    tailwind({
      nesting: true,
    }),
  ],
});
