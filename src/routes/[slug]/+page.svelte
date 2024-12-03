<script lang="ts">
  import { formatDate } from '$lib/utils';
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <script defer src="https://cdn.commento.io/js/commento.js"></script>
</svelte:head>

<article class="bg-gray-50 text-gray-00 bg-dots flex flex-grow flex-col overflow-hidden px-4 py-8">
  <div class="container flex flex-grow flex-col">
    <hgroup class="prose mb-6 flex max-w-full flex-col items-center justify-between">
      <h1 class="mb-0 font-bold text-primary">
        {data.meta.title}
      </h1>
      <div class="text-gray-600 flex items-center italic">
        <p class="text-sm font-medium">
          Published on {formatDate(data.meta.date)}
        </p>
      </div>
    </hgroup>

    <div
      class="prose-headings:text-gray-900
      prose
    prose-lg
    max-w-full
    flex-grow
    px-8
 "
    >
      {@render data.content()}
    </div>
  </div>
  <section class="container">
    <div id="commento"></div>
  </section>
</article>
