// @ts-check
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import vocasync from "@vocasync/astro";
import { rehypeAudioWords, rehypeMathSpeech } from "@vocasync/astro/rehype";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";

const audioMapPath = "src/data/audio-map.json";
const collectionName = "blog";

export default defineConfig({
  site: "https://astro-integration-demo.vocasync.io",
  markdown: {
    // remarkMath parses $...$ / $$...$$ into code.math-inline / .math-display.
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      // 1. Attach each expression's spoken form (from the audio map) as
      //    data-speech — reads the LaTeX from the .math element, so it must run
      //    before the renderer replaces it.
      // 2. Render math to HTML (MathJax -> mjx-container).
      // 3. Wrap words (and math units) with data-i/data-n for highlighting.
      [rehypeMathSpeech, { collectionName, audioMapPath }],
      rehypeMathjax,
      [rehypeAudioWords, { collectionName, audioMapPath }],
    ],
  },
  integrations: [mdx(), vocasync()],
});
