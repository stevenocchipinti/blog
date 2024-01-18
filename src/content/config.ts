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

const trips = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      years: z.array(z.number()),
      source: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
})

export const collections = { travel, trips }
