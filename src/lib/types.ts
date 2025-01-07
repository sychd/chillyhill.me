export type Categories =
  | 'программирование' | 'писательство' | 'заметки по книгам' | 'образ жизни' | 'философия' | 'теология'
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
