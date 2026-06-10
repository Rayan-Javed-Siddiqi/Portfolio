import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    category: z.string().optional(),
    order: z.number().optional(),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    status: z.string().optional(),
  }),
});

export const collections = { projects };
