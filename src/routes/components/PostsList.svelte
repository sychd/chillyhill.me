<script lang="ts">
  import type { Post } from '$lib/types';
  import { base } from '$app/paths';
  import { formatDate } from '$lib/utils';

  let { posts }: { posts: Post[] } = $props();
</script>

<section class="prose flex flex-col gap-4 dark:prose-invert">
  {#each posts as post}
    <section class="flex w-full items-center">
      <div class="flex w-full flex-col gap-2">
        <a href={base + '/' + post.slug} class="link text-lg font-semibold">{post.title}</a>
        {#if post.description}
          <span>
            {post.description}
          </span>
        {/if}
      </div>

      <div class="rounded-md text-center font-semibold leading-tight text-primary dark:text-white">
        {formatDate(post.date)}
      </div>
    </section>
  {/each}
</section>
