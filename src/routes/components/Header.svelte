<script>
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import ThemeSwitcher from './ThemeSwitcher.svelte';

  const ROOT_PATHS = ['/', 'uk/', 'de/', 'ru/'];
  const getCurrentPath = () => (browser ? window.location.pathname : '/');
  let currentPath = $state(getCurrentPath());
  afterNavigate(() => (currentPath = getCurrentPath()));
</script>

<header
  class="relative z-10 flex h-14 items-center justify-between bg-gradient-to-b from-primary/10 to-transparent py-2"
>
  <section class="container flex flex-shrink-0 items-center justify-between gap-4 text-nowrap">
    <a
      href={`${base}/`}
      class="flex items-center font-logo text-3xl text-cyan-900 dark:text-secondary"
      >Chillyhill ⛰︎</a
    >
    <div class="flex flex-nowrap items-center gap-4">
      {#if !ROOT_PATHS.includes(currentPath)}
        <a href={base + '/'} class="link h-fit">
          <button
            class="rounded-md bg-cyan-700/10 px-4 py-2 text-sm text-primary transition-colors hover:bg-cyan-800/20 dark:bg-secondary/30 dark:text-secondary dark:hover:bg-secondary/20"
          >
            🏠
          </button>
        </a>
      {/if}
      <ThemeSwitcher />
    </div>
  </section>
</header>
