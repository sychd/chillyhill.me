<script>
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
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
      class="flex items-center font-logo text-3xl text-cyan-800 dark:text-secondary"
      >Chillyhill ⛰︎</a
    >
    <div class="flex flex-nowrap items-center gap-4">
      {#if currentPath !== '/'}
        <a href={base + '/'} class="link h-fit">
          <button
            class="rounded-md border border-cyan-700 px-4 py-1 text-sm text-primary transition-colors hover:bg-cyan-800/10 dark:border-secondary dark:text-secondary dark:hover:bg-gray-600/50"
          >
            Go back
          </button>
        </a>
      {/if}
      <ThemeSwitcher />
    </div>
  </section>
</header>
