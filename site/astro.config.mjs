// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Old URLs: the expansion page used to be /sites, and the retired logo concepts lived at /logos.
  redirects: { '/sites': '/expansion', '/logos': '/brand' },
});
