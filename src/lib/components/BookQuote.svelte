<script lang="ts">
  import type { BookNoteQuotes } from '$lib/types';

  let { quotes }: { quotes: BookNoteQuotes[] } = $props();
  const getRandomItem = <T,>(array: T[]): T => array[Math.floor(Math.random() * array.length)];
  let article = getRandomItem(quotes);
  let quote = getRandomItem(article.quotes);
</script>

<div class="flex flex-col gap-2 px-4">
  <p class="m-0 text-sm italic first-letter:capitalize">
    {quote}
  </p>
  <a class="link self-end text-xs" href={article.link}>{article.title}</a>
</div>
