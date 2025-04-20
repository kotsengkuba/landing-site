import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { remarkModifiedTime } from "./remark-modified-time.mjs"

export default defineConfig({
  site: "https://minniemakes.co",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
});
