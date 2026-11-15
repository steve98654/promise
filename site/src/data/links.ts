// Shared links and number formatting used across the site.
export const driveFolder = 'https://drive.google.com/drive/folders/10RQADdcEHl1u_HX2Q0tkRZkVsn6SpqGA';
export const budgetSheet = 'https://docs.google.com/spreadsheets/d/1HZ2NGYzshcoLFb4_1fPvt9yQqNEgaYnTdGr9agozaEs/edit';
export const logosFolder = 'https://drive.google.com/drive/folders/1FFHPmsCy5iyfNrEMIWuWAKuviJRacMRo';

export const docs = {
  committee: '/docs/we-promise-newark-committee-plan.pdf',
  steering: '/docs/we-promise-newark-foundation-steering.pdf',
  onePager: '/docs/we-promise-ljff-one-pager.pdf',
  budgetXlsx: '/docs/we-promise-newark-5yr-budget-snapshot.xlsx',
  sitesCsv: '/docs/we-promise-23-sites.csv',
};

export const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
export const thousands = (n: number) => (n === 0 ? '–' : `$${Math.round(n / 1000).toLocaleString('en-US')}k`);
export const millions = (n: number) => `$${(n / 1e6).toFixed(1)}M`;
export const pct = (n: number) => `${Math.round(n * 100)}%`;
