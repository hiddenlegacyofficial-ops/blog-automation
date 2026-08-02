import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().or(z.string().transform((str) => new Date(str))),
    author: z.string().default('Syntexic Team'),
    authorAvatar: z.string().default('SX'),
    authorAvatarBg: z.string().default('blue'),
    category: z.string(),
    categoryPillClass: z.string().default('pill-dev'),
    readTime: z.string().default('5 min read'),
    coverIcon: z.string().default('⚡'),
    coverBgClass: z.string().default('post-cover-dev'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
