import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.SITE_URL || "https://lift-demo.vorelloagency.com",
  integrations: [
    sitemap(),
    tailwind({
      nesting: true,
    }),
  ],
});
