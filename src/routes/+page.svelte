<script>
  import PostsList from './components/PostsList.svelte';
  import BookQuote from '$lib/components/BookQuote.svelte';

  let { data } = $props();
</script>

<div class="flex flex-grow flex-col">
  <article
    class="relative -top-14 left-0 w-full bg-[url('/images/background-banner.svg')] bg-cover bg-center pt-14"
  >
    <section class="container pb-4">
      <div class="prose py-4 dark:prose-invert">
        <h1
          class="inline-block bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900 bg-clip-text text-transparent dark:via-cyan-400 dark:to-cyan-500"
        >
          Hello,
        </h1>
        <div class="prose-lg text-gray-700 dark:text-gray-200">
          <p>My name is <i>Denys</i> and welcome to my page!</p>
          <p>
            I'm a software engineer, storyteller, thinker, hiker, and occasional couch potato. We
            may be alike in many ways, but our differences are what make us unique — and that's
            something I truly celebrate!
          </p>
          <p>
            Here, you'll discover a collection of my creations, reflections, and useful insights
            I've gathered. I write in English, Ukrainian, and Russian, so you'll come across a wild
            mix of all three here. <span class="italic"
              >I do have plans to add multi-language support someday — but not today (seriously, I'm
              an occasional, yet a pro-level couch potato).</span
            >
          </p>
        </div>
        <BookQuote quotes={data.quotes} />
      </div>
    </section>
    <div
      class="relative h-10 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-800"
    ></div>
  </article>
  <article class="bg-dots -mt-[91px] flex flex-grow flex-col gap-8">
    <section class="container flex-grow pt-10">
      <div class="prose mb-4 dark:prose-invert">
        <h2 class="text-primary dark:text-secondary">Recent posts</h2>
      </div>
      <PostsList posts={data.posts} />
    </section>
    <section class="container rounded-lg bg-opacity-80 py-4">
      <div class="prose dark:prose-invert">
        <h2 class="text-primary dark:text-secondary">Contact me</h2>
        <p>
          You can reach me out by the email. Please, remove <b>NOSPАМ.</b> prefix before sending! Also,
          we can connect in telegram:
        </p>
        <ul>
          <li>
            Email: <a class="link" href="mailto:NOSPАМ.dechillyhill&#64;proton&#46;me"
              >NOSPАМ.dechillyhill&#64;proton&#46;me</a
            >
          </li>
          <li>
            Telegram channel: <a class="link" href="https://t.me/thecoldmountain"
              >The Cold Mountain</a
            >
          </li>
        </ul>
      </div>
    </section>
  </article>
</div>
