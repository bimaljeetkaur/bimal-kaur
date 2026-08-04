import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const signals = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/signals",
  }),

  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  signals,
};