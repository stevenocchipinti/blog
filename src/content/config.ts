import { defineCollection, z } from "astro:content"

const travel = defineCollection({
  type: "content",
  schema: z.object({
    pubDate: z.coerce.date(),
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    source: z.string().optional(),
    hidden: z.boolean().optional(),
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
      hidden: z.boolean().optional(),
    }),
})

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    /* categories: z.array(z.string()).optional(), */
  }),
})

export const collections = { travel, trips, posts }
