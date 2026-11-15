// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Old URL for the expansion page.
  redirects: { '/sites': '/expansion' },
});
