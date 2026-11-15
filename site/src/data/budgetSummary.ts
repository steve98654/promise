// Headline budget figures, read from budget.json (the snapshot of the budget sheet)
// so the Home, Pitch and Budget pages always agree.
import budget from './budget.json';

const byLabel = (start: string) => {
  const row = budget.summary.find((s) => s.label.startsWith(start));
  if (!row) throw new Error(`budget.json summary is missing "${start}"`);
  return row.value as number;
};

export const startup = byLabel('Startup philanthropy');
export const year1 = byLabel('Year 1 philanthropy');
export const year5 = byLabel('Year 5 philanthropy');
export const sixYearTotal = byLabel('Philanthropy incl. startup');
export const perStudent = byLabel('Average philanthropy per student-year');
export const ljffAsk = byLabel('LJFF ask at target share');
export const studentsYear5 = byLabel('Students at Year 5');
export const ljffShare = ljffAsk / sixYearTotal;

// Funding mix rows other than the Foundation, for "the other 60%" sentences.
export const otherFunders = budget.funding
  .filter((f) => typeof f.share === 'number' && f.share < 1 && !f.label.startsWith('LeBron'))
  .map((f) => ({ label: f.label, share: f.share as number }));
