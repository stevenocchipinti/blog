import { defineCollection, z } from "astro:content"

const travel = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    source: z.string().optional(),
  }),
})

export const collections = { travel }
