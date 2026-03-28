export type AccentPalette = {
  primary: string;
  secondary: string;
  glow: string;
  surface: string;
};

export type GameMedia = {
  src: string;
  alt: string;
  caption: string;
  frame?: 'poster' | 'pixel' | 'icon';
};

export type GameEntry = {
  slug: string;
  title: string;
  tagline: string;
  status: string;
  genre: string;
  stack: string;
  fact: string;
  repoUrl: string;
  liveUrl?: string;
  detailCopy: string[];
  cardImage: string;
  cardAlt: string;
  icon?: string;
  detailMedia?: GameMedia[];
  accent: AccentPalette;
};
