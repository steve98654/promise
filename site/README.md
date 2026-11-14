# Promise site

Astro site for the Newark Promise school planning materials (Newark first, then national).

```sh
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

- `src/pages/index.astro`: home page
- `src/pages/logos.astro`: logo concept gallery
- `src/data/logos.ts`: logo names and descriptions
- `public/logos/`: logo SVGs (text uses system fonts; outline the type before final production use)
