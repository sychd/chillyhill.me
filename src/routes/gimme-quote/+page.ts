import type { BookNoteQuotes } from '$lib/types';
import { base } from '$app/paths';

export async function load({ fetch }) {
  const quotes: BookNoteQuotes[] = await (await fetch(`/${base}api/book-quotes`)).json();
  return { quotes };
}
