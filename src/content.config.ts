import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    audio: z.boolean().default(true),
    // Per-post overrides consumed by `vocasync sync` (fall back to vocasync.config.mjs).
    voice: z.string().optional(),
    language: z.string().optional(),
    format: z.string().optional(),
  }),
});

export const collections = { blog };
