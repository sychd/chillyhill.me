<script lang="ts">
  import '../app.css';
  import { i18n } from '$lib/i18n';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import Logo from './components/Logo.svelte';
  import { base } from '$app/paths';
  import { afterNavigate } from '$app/navigation';
  import { browser } from '$app/environment';

  let { children } = $props();

  const getCurrentPath = () => (browser ? window.location.pathname : '/');
  let currentPath = $state(getCurrentPath());
  afterNavigate(() => (currentPath = getCurrentPath()));
</script>

<svelte:head>
  {#if import.meta.env.MODE === 'production'}
    <script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="6f688109-6024-4733-9aad-826681849c91"
    ></script>
  {/if}
</svelte:head>

<ParaglideJS {i18n}>
  <div class="bg-gray-50 flex min-h-screen flex-col">
    <header
      data-header
      class="to-transparent relative z-10 flex h-14 items-center justify-between bg-opacity-10 bg-gradient-to-b from-primary/30 py-2"
    >
      <section class="container flex flex-shrink-0 items-center justify-between gap-4 text-nowrap">
        <Logo />
        {#if currentPath !== '/'}
          <a href={base + '/'} class="link">👈 Go home</a>
        {/if}
      </section>
    </header>
    <main class="flex flex-grow flex-col">
      {@render children()}
    </main>
    <footer class="relative h-16 bg-[url('/images/background-banner.svg')] bg-cover bg-center">
      <div class="from-transparent to-gray-50 absolute h-6 w-full bg-gradient-to-t"></div>
      <section class="container">
        <div class="text-cyan-800 flex pt-8 text-xs">© 2024 | Denys Sych</div>
      </section>
    </footer>
  </div>
</ParaglideJS>
