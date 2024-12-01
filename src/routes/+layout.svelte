<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { i18n } from '$lib/i18n';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';

  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  <div class="bg-gray-50 flex min-h-screen flex-col">
    <header
      data-header
      class="to-transparent relative z-10 flex h-14 items-center justify-between bg-opacity-10 bg-gradient-to-b from-primary/30 py-2"
    >
      <section class="container flex flex-shrink-0 items-center justify-between gap-4 text-nowrap">
        <a href={`${base}/`} class="text-cyan-800 flex items-center font-logo text-3xl"
          >Chillyhill ⛰︎</a
        >
      </section>
    </header>
    <main class="flex flex-grow flex-col">
      {@render children()}
    </main>
    <footer class="relative h-16 bg-[url('/images/background-banner.svg')] bg-cover bg-center">
      <div class="from-transparent to-gray-50 absolute h-6 w-full bg-gradient-to-t"></div>
      <section class="container absolute bottom-0">
        <div class="text-cyan-800 flex justify-end p-4 text-xs">© 2024 | Denys Sych</div>
      </section>
    </footer>
  </div>
</ParaglideJS>
