<script>
  import PostsList from './components/PostsList.svelte';

  let { data } = $props();
</script>

<div class="flex flex-grow flex-col">
  <article
    class="relative -top-14 left-0 w-full bg-[url('/images/background-banner.svg')] bg-cover bg-center pt-14"
  >
    <section class="container pb-4">
      <div class="prose py-4">
        <h1
          class="via-cyan-500 to-indigo-500 text-transparent inline-block bg-gradient-to-r from-primary bg-clip-text"
        >
          Welcome!
        </h1>
        <div class="text-gray-600 prose-lg">
          <p>My name is <i>Denys</i> and this is my page.</p>
          <p>
            I'm a human being, software engineer, story writer, thinker, hiker, couch lier. We're
            similar & we're different. I'm happy that we are!
          </p>
          <p>
            Here you can find some of my creations and thoughts that I'm eager to share with you.
          </p>
        </div>
      </div>
    </section>
    <div class="from-gray-50 to-transparent relative h-10 bg-gradient-to-t"></div>
  </article>
  <article class="bg-dots -mt-[91px] flex flex-grow flex-col gap-8">
    <section class="container flex-grow pt-10">
      <div class="prose mb-4">
        <h2 class="text-primary">Recent posts</h2>
      </div>
      <PostsList posts={data.posts} />
    </section>
    <section class="container rounded-lg bg-opacity-80 py-4">
      <div class="prose">
        <h2 class="text-primary">Contact me</h2>
        <p>
          You can reach me out by the email. Please, remove <b>NOSPАМ.</b> prefix before sending!
        </p>
        <ul>
          <li>
            <a class="text-blue-500" href="mailto:NOSPАМ.dechillyhill&#64;proton&#46;me"
              >NOSPАМ.dechillyhill&#64;proton&#46;me</a
            >
          </li>
        </ul>
      </div>
    </section>
  </article>
</div>
