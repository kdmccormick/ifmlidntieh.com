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

// Same shape as poems - one markdown file per event, title/order in
// frontmatter, body rendered as markdown for the Events tabs display.
const events = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
	schema: z.object({
		title: z.string(),
		order: z.number(),
	}),
});

// Single-entry collection - just the About page's body copy, no frontmatter
// fields needed since there's nothing to title/order/select among.
const about = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
});

export const collections = { poems, events, about };
