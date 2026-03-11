/**
 * src/content.config.ts
 * 
 * Se define los campos de los markdown de los proyectos, 
 * y se le dice a Astro que busque los md en la carpeta src/content/projects
 * 
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({

    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    image: z.string().optional(),
    cardImage: z.string().optional(),
    modalImage: z.string().optional(),
    featured: z.boolean().default(false),
    
  }),
});

export const collections = { projects };
