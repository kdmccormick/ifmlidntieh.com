import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const poems = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/poems' }),
	schema: z.object({
		title: z.string(),
		// Display order on the Poems page - not filename/filesystem order,
		// which isn't guaranteed stable across platforms.
		order: z.number(),
	}),
});

export const collections = { poems };
