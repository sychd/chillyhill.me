export type Categories =
  | 'programming' | 'writing' | 'book notes'
  | 'lifestyle' | 'philosophy' | 'theology';

export type Post = {
  title: string;
  slug: string;
  description: string;
  language: string;
  date: string;
  categories: Categories[];
  published: boolean;
};
