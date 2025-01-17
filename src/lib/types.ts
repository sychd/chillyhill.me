export const CATEGORIES = [
  'programming',
  'writing',
  'book notes',
  'lifestyle',
  'philosophy',
  'theology',
  'photo',
  'my app',
  'psychology'
] as const;
export type Category = (typeof CATEGORIES)[number];

export const LANGUAGES = ['ru', 'en', 'ua'] as const;
export type Language = (typeof LANGUAGES)[number];

export type Post = {
  title: string;
  slug: string;
  description: string;
  language: LANGUAGES[];
  date: string;
  categories: Category[];
  published: boolean;
};
