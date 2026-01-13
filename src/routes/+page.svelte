<script>
  import PostsList from './components/PostsList.svelte';
  import BookQuote from '$lib/components/BookQuote.svelte';
  import { base } from '$app/paths';
  import CategorizedPosts from './components/CategorizedPosts.svelte';

  let { data } = $props();
</script>

<div class="flex flex-grow flex-col">
  <article
    class="relative -top-14 left-0 w-full bg-[url('/images/background-banner.svg')] bg-cover bg-center pt-14"
  >
    <div
      class="relative h-4 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-800"
    ></div>
  </article>
  <article class="-mt-[91px] flex flex-grow flex-col gap-8">
    <section class="container flex-grow pt-10">
      <div class="prose mb-4 dark:prose-invert">
        <h2 class="text-primary dark:text-secondary">Recent posts</h2>
      </div>
      <CategorizedPosts posts={data.posts} />
    </section>
    <section class="container rounded-lg bg-opacity-80 py-4">
      <div class="prose dark:prose-invert">
        <h2 class="text-primary dark:text-secondary">Contact me</h2>
        <ul>
          <li>
            Telegram channel: <a class="link" href="https://t.me/chillyhillstories"
              >Chillyhill stories</a
            >
          </li>
        </ul>
      </div>
    </section>
  </article>
</div>
