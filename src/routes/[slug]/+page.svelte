<script lang="ts">
  import { formatDate } from '$lib/utils';
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
  class="bg-dots flex flex-grow flex-col overflow-hidden bg-gray-50 px-4 py-8 text-gray-300 dark:bg-gray-800"
>
  <div class="container flex flex-grow flex-col">
    <hgroup
      class="prose mb-6 flex max-w-full flex-col items-center justify-between dark:prose-invert"
    >
      <h1 class="mb-0 font-bold text-primary dark:text-secondary">
        {data.meta.title}
      </h1>
      <div class="flex items-center italic text-gray-600 dark:text-gray-300">
        <p class="text-sm font-medium">
          Published on {formatDate(data.meta.date)}
        </p>
      </div>
    </hgroup>

    <div
      class="prose prose-lg max-w-full flex-grow dark:prose-invert prose-headings:text-gray-800 dark:prose-headings:text-gray-200
"
    >
      {@render data.content()}
    </div>
  </div>
</article>
