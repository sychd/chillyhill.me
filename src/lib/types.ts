export const CATEGORIES = [
  'programming',
  'ai',
  'writing',
  'book notes',
  'lifestyle',
  'philosophy',
  'theology',
  'photo',
  'my app',
  'psychology',
  'story',
  'poetry'
] as const;
export type Category = (typeof CATEGORIES)[number];

export const LANGUAGES = ['ru', 'en', 'ua'] as const;
export type Language = (typeof LANGUAGES)[number];

export type Post = {
  title: string;
  slug: string;
  description: string;
  language: Language;
  date: string;
  categories: Category[];
  published: boolean;
  skipQuoting?: boolean;
};

export type BookNoteQuotes = { quotes: string[]; title: string; link: string };
