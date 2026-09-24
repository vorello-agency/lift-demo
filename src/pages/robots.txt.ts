import type { APIRoute } from "astro";

import { getAbsoluteUrl } from "../utils/urls";

export const GET: APIRoute = ({ site, url }) => {
  const sitemapUrl = getAbsoluteUrl("sitemap-index.xml", site ?? url);
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
