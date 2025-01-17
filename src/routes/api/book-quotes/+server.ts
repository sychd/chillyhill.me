import { base } from '$app/paths';
import { json } from '@sveltejs/kit';
import { type BookNoteQuotes, type Post } from '$lib/types';

export const prerender = true;

const extractQuotes = (content: string): string[] =>
  content
    .split('\n')
    .filter((line) => line.startsWith('- '))
    .map((line) => line.replace('- ', '').trim());

const getQuotesFromPost = (raw: string, meta: Post): BookNoteQuotes => {
  const quotes = extractQuotes(raw);

  return {
    quotes,
    title: meta.title,
    link: `${base}/${meta.slug}`
  };
};

async function getBookQuotes(): Promise<BookNoteQuotes[]> {
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });
  const contents = import.meta.glob('/src/posts/*.md', { eager: true, query: 'raw' });
  let result: BookNoteQuotes[] = [];

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');
    if (file && typeof file === 'object' && 'metadata' in file) {
      const metadata = Object.assign({ slug }, file.metadata) as Post;
      if (metadata.categories.includes('book notes')) {
        result = result.concat(
          getQuotesFromPost((contents[path] as { default: string }).default, metadata)
        );
      }
    }
  }

  return result;
}

export async function GET() {
  const quotes = await getBookQuotes();
  return json(quotes);
}
