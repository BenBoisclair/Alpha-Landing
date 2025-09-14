// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: "server", // Enable server mode for actions  
  adapter: vercel(),
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "th",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [mdx(), sitemap()],

  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },

    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
