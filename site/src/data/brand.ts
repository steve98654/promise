export interface BrandAsset {
  base: string;
  name: string;
  use: string;
  dark?: boolean;
}

// Logo set built from the We Promise concept (Cavaliers + Heat colors).
export const brandAssets: BrandAsset[] = [
  { base: 'we-promise-horizontal', name: 'Horizontal logo', use: 'Default logo for light pages, letterhead, email signatures.' },
  { base: 'we-promise-horizontal-dark', name: 'Horizontal logo, dark', use: 'Site header, dark sections, slides with dark backgrounds.', dark: true },
  { base: 'we-promise-stacked', name: 'Stacked logo', use: 'Square-ish spaces: posters, flyers, the hero of a page.' },
  { base: 'we-promise-mark', name: 'Mark', use: 'The goat, ball and 23 stars on their own, when the name is already nearby.' },
  { base: 'we-promise-icon', name: 'Icon', use: 'Favicon, app icon and anywhere small. Drops the stars so it reads at 16px.' },
  { base: 'we-promise-seal', name: 'Seal', use: 'Social avatars, stickers, merch, certificates.' },
  { base: 'we-promise-wordmark', name: 'Wordmark', use: 'Name only, for tight horizontal spaces and footers.' },
  { base: 'we-promise-one-color', name: 'One-color mark', use: 'Embroidery, stamps, single-color print.' },
];

export const brandColors = [
  { name: 'Wine', hex: '#860038', from: 'Cavaliers' },
  { name: 'Gold', hex: '#FDBB30', from: 'Cavaliers' },
  { name: 'Navy', hex: '#041E42', from: 'Cavaliers' },
  { name: 'Red', hex: '#98002E', from: 'Heat' },
  { name: 'Black', hex: '#000000', from: 'Heat' },
  { name: 'Orange', hex: '#F9A01B', from: 'Heat' },
];
