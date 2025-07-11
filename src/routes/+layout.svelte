<script lang="ts">
  import '../app.css';
  import { i18n } from '$lib/i18n';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import Header from './components/Header.svelte';

  let { children } = $props();
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
  <div class="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-800">
    <Header />
    <main class="flex flex-grow flex-col">
      {@render children()}
    </main>
    <footer class="relative h-16 bg-[url('/images/background-banner.svg')] bg-cover bg-center">
      <div
        class="absolute h-6 w-full bg-gradient-to-t from-transparent to-gray-50 dark:to-gray-800"
      ></div>
      <section class="container">
        <div class="flex pt-8 text-xs text-cyan-900 dark:text-secondary">
          Denys Sych © {new Date().getFullYear()} All rights reserved
        </div>
      </section>
    </footer>
  </div>
</ParaglideJS>
