<script>
  import PostsList from './components/PostsList.svelte';

  let { data } = $props();
</script>

<div class="flex flex-grow flex-col">
  <article
    class="relative -top-14 left-0 w-full bg-[url('/images/background-banner.svg')] bg-cover bg-center pt-14"
  >
    <section class="container pb-4">
      <div class="prose py-4 dark:prose-invert">
        <h1
          class="dark:via-cyan-400 dark:to-cyan-500 via-cyan-800 to-cyan-900 text-transparent from-cyan-700 inline-block bg-gradient-to-r bg-clip-text"
        >
          Hello,
        </h1>
        <div class="text-gray-700 dark:text-gray-200 prose-lg">
          <p>My name is <i>Denys</i> and welcome to my page!</p>
          <p>
            I'm a software engineer, storyteller, thinker, hiker, and occasional couch potato. We
            may be alike in many ways, but our differences are what make us unique — and that's
            something I truly celebrate!
          </p>
          <p>
            Here, you'll find a collection of my creations and thoughts, and I'm excited to share
            them with you.
          </p>
        </div>
      </div>
    </section>
    <div
      class="dark:from-gray-800 from-gray-50 to-transparent relative h-10 bg-gradient-to-t"
    ></div>
  </article>
  <article class="bg-dots -mt-[91px] flex flex-grow flex-col gap-8">
    <section class="container flex-grow pt-10">
      <div class="prose mb-4 dark:prose-invert">
        <h2 class="dark:text-secondary text-primary">Recent posts</h2>
      </div>
      <PostsList posts={data.posts} />
    </section>
    <section class="container rounded-lg bg-opacity-80 py-4">
      <div class="prose dark:prose-invert">
        <h2 class="dark:text-secondary text-primary">Contact me</h2>
        <p>
          You can reach me out by the email. Please, remove <b>NOSPАМ.</b> prefix before sending!
        </p>
        <ul>
          <li>
            <a class="link !not-italic" href="mailto:NOSPАМ.dechillyhill&#64;proton&#46;me"
              >NOSPАМ.dechillyhill&#64;proton&#46;me</a
            >
          </li>
        </ul>
      </div>
    </section>
  </article>
</div>
