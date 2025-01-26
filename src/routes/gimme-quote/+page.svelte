<script>
  import BookQuote from '$lib/components/BookQuote.svelte';

  let { data } = $props();
</script>

<div class="prose dark:prose-invert">
  <article class="align-center container flex flex-col gap-4">
    <h2 class="m-0 text-primary dark:text-secondary">Recent posts</h2>
    <BookQuote quotes={data.quotes} />
    <button
      on:click={() => location.reload()}
      class="self-start rounded bg-cyan-600 px-3
    py-1 text-white hover:bg-cyan-700"
    >
      More
    </button>
  </article>
</div>
