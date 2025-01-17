<script lang="ts">
  import type { BookNoteQuotes, Post } from '$lib/types';
  import { base } from '$app/paths';
  import { formatDate } from '$lib/utils';

  let { quotes }: { quotes: BookNoteQuotes[] } = $props();
  const getRandomItem = <T,>(array: T[]): T => array[Math.floor(Math.random() * array.length)];
  let article = getRandomItem(quotes);
  let quote = getRandomItem(article.quotes);
</script>

<div class="flex flex-col gap-2 px-4">
  <h4 class="mb-0 text-primary dark:text-secondary">Occasional book quote</h4>
  <p class="m-0 text-sm italic first-letter:capitalize">
    {quote}
  </p>
  <a class="link self-end text-xs" href={article.link}>{article.title}</a>
</div>
