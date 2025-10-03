import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
// NOTE: For GitHub Pages project site, set site to
// 'https://<user>.github.io/<repo>' and base to '/<repo>'
// If deploying to a user/organization site, use site 'https://<user>.github.io' and base '/'
export default defineConfig({
  site: 'https://sewder.github.io',

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});