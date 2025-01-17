import type { BookNoteQuotes, Post } from '$lib/types';

export async function load({ fetch }) {
  const quotes: BookNoteQuotes[] = await (await fetch('api/book-quotes')).json();
  const posts: Post[] = await (await fetch('api/posts')).json();
  return { posts, quotes };
}
