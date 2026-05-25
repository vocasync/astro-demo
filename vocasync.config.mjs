/**
 * VocaSync Configuration
 * @see https://vocasync.io/docs/astro
 */
export default {
  // Content collection settings
  collection: {
    name: "blog",
    path: "./src/content/blog",
  },

  // Language for synthesis (ISO 639-1 code)
  language: "en",

  // Synthesis settings
  synthesis: {
    voice: "onyx",
    quality: "hd",
    format: "mp3",
  },

  // Math/LaTeX support: converts expressions to speech (clearspeak) so the
  // math post is narrated and highlighted. Requires mathjax-full +
  // speech-rule-engine (installed in this demo).
  math: {
    enabled: true,
    style: "clearspeak",
  },

  // Output settings
  output: {
    audioMapPath: "./src/data/audio-map.json",
  },

  // Frontmatter field to enable/disable audio per post
  frontmatterField: "audio",

  // Processing options
  processing: {
    concurrency: 3,
    force: false,
  },
};
