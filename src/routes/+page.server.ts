import type { BookPostQuote, Post } from '$lib/types';

export async function load({ fetch }) {
  const quote: BookPostQuote = await (await fetch('api/book-quote')).json();
  const posts: Post[] = await (await fetch('api/posts')).json();
  return { posts, quote };
}
