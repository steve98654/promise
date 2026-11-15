# Promise

Planning materials and website for bringing a Promise school to Newark, NJ, and then to cities across the USA.

- `site/`: Astro website
- `worker/` + `wrangler.jsonc`: Cloudflare Worker that password-protects the whole site

## Site password

Every page asks for a password (HTTP basic auth; any username works). The password lives only in Cloudflare as the secret `SITE_PASSWORD`:

- Dashboard: Workers & Pages → `wepromise` → Settings → Variables and Secrets → Add → type **Secret**, name `SITE_PASSWORD`.
- Or CLI: `npx wrangler secret put SITE_PASSWORD --name wepromise`

To change the password, update that secret. If the secret is missing, the site shows a "locked" message instead of going public. For local testing, put `SITE_PASSWORD=...` in a `.dev.vars` file (gitignored) and run `npx wrangler dev` after building the site.
