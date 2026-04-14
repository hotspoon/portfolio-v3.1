// @ts-check

import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://www.hamzahalfarisi.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
