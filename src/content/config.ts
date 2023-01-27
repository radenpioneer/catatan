import { defineCollections, z } from 'astro:content';

export const collections = {
  'posts': defineCollections({
    schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      date: z.date().safeParse(),
      image: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),
}
