<script>
  import BookQuote from '$lib/components/BookQuote.svelte';

  let { data } = $props();
</script>

<article class="flex-con align-center container flex gap-4">
  <BookQuote quotes={data.quotes} />
</article>
