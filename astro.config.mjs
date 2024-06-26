import { defineConfig, squooshImageService } from "astro/config"
import mdx from "@astrojs/mdx"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://blog.stevenocchipinti.com",
  integrations: [mdx(), sitemap()],
  image: {
    service: squooshImageService(),
  },
  markdown: {
    shikiConfig: {
      theme: "material-theme-ocean",
    },
  },
})
