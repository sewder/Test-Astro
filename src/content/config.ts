import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    readingTime: z.number().int().positive().optional(),
    // Optional hero fields used on post pages
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCredit: z.string().optional(),
    heroCreditUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };