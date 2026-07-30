// @ts-check

import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://www.hamzahalfarisi.web.id",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
