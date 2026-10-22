// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  markdown: {
    // Poems are written as one short line per line, relying on single
    // newlines (not CommonMark's blank-line paragraph breaks) to read as
    // separate lines - this turns each of those into a <br> instead of
    // collapsing them into one run-on line.
    processor: unified({ remarkPlugins: [remarkBreaks] }),
  },
});
