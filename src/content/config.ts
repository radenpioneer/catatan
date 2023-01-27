import { defineCollection, z } from 'astro:content'

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      date: z.date(),
      image: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
  }),
}
