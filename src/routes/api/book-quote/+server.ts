import { base } from '$app/paths';
import { json } from '@sveltejs/kit';
import { type BookPostQuote, type Post } from '$lib/types';

export const prerender = true;

const getRandomItem = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

const extractQuotes = (content: string): string[] =>
  content
    .split('\n')
    .filter((line) => line.startsWith('- '))
    .map((line) => line.replace('- ', '').trim());

const getQuoteFromPost = (raw: string, meta: { title: string; slug: string }): BookPostQuote => {
  const quotes = extractQuotes(raw);
  const quote = getRandomItem(quotes);

  return {
    quote: quote ?? '',
    title: meta.title,
    link: `${base}/${meta.slug}`
  };
};

async function getBookQuote(): Promise<BookPostQuote> {
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });
  const contents = import.meta.glob('/src/posts/*.md', { eager: true, query: 'raw' });
  const [path, file] = getRandomItem(Object.entries(paths));
  const slug = path.split('/').at(-1)?.replace('.md', '');

  if (file && typeof file === 'object' && 'metadata' in file && slug) {
    const metadata = file.metadata as Omit<Post, 'slug'>;
    const post = { ...metadata, slug } satisfies Post;

    if (post.categories.includes('book notes')) {
      return getQuoteFromPost((contents[path] as { default: string }).default, post);
    }
  }

  return getQuoteFromPost('', { title: '', slug: '' });
}

export async function GET() {
  const quotes = await getBookQuote();
  return json(quotes);
}
