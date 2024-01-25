import { defineCollection, z } from "astro:content"

const travel = defineCollection({
  type: "content",
  schema: z.object({
    pubDate: z.coerce.date(),
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    source: z.string().optional(),
  }),
})

const trips = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      years: z.array(z.number()),
      startDate: z.coerce.date(),
      source: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
})

export const collections = { travel, trips }
