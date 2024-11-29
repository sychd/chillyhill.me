<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { i18n } from '$lib/i18n';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import LanguageSwitcher from './components/LanguageSwitcher.svelte';
  import ThemeSwitcher from './components/ThemeSwitcher.svelte';
  import Navigation from './components/Navigation.svelte';

  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  <div class="bg-gray-50 dark:bg-gray-600 flex min-h-screen flex-col">
    <header
      data-header
      class="dark:bg-gray-700 to-transparent from-cyan-100 relative z-10 flex h-14 items-center justify-between bg-opacity-10 bg-gradient-to-b px-4 py-2"
    >
      <section class="container flex flex-shrink-0 items-center justify-between gap-4 text-nowrap">
        <a
          href={`${base}/`}
          class="dark:text-secondary flex items-center font-logo text-3xl text-primary"
          >Chillyhill ⛰︎</a
        >
        <!--  <Navigation />  -->
        <div class=" hidden items-center gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </section>
    </header>
    <main class="flex-grow">
      {@render children()}
    </main>
    <footer>
      <section class="container border-t">
        <div class="text-gray-500 dark:text-gray-400 p-4 text-right text-xs">
          © 2024, Denys Sych
        </div>
      </section>
    </footer>
  </div>
</ParaglideJS>
