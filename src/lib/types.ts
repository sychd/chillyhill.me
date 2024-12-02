export type Categories = 'programming' | 'writing';

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Categories[];
  published: boolean;
};