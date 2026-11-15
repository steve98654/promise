# We Promise site

Astro site for the We Promise Newark planning materials (Newark first, then national).

```sh
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

- `src/pages/`: one file per tab (home, committee, plan, pitch, budget, site-search, lessons, expansion, documents, brand).
- `src/layouts/Base.astro`: header, mobile menu, footer, shared styles and print styles.
- `src/components/`: `Draft` banner, `USMap` (23-site map, drawn at build time from `us-atlas`), `BudgetChart`.
- `src/data/dates.ts`: the "last updated" date of every draft. Change a date here, not on the pages.
- `src/data/budget.json`: snapshot of the budget sheet. `budgetSummary.ts` reads the headline numbers from it, so
  Home, Pitch and Budget always agree. Refresh this file when the Google Sheet changes.
- `src/data/sites.json`, `expansion_meta.json`: the 23-site list. `coords.ts` holds each city's map position.
- `src/data/links.ts`: Google Drive, budget sheet and download links.
- `public/brand/`: the We Promise logo set. `public/docs/`: downloadable PDFs and spreadsheets.

The Committee, Plan and Pitch text is also in the LaTeX drafts in the project folder; edit both when a draft changes.
Old URLs `/sites` and `/logos` redirect to `/expansion` and `/brand`.
