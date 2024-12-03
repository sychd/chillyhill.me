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
  class="to-transparent relative z-10 flex h-14 items-center justify-between bg-gradient-to-b from-primary/10 py-2"
>
  <section class="container flex flex-shrink-0 items-center justify-between gap-4 text-nowrap">
    <a
      href={`${base}/`}
      class="dark:text-secondary text-cyan-800 flex items-center font-logo text-3xl"
      >Chillyhill ⛰︎</a
    >
    <div class="flex flex-nowrap gap-12">
      {#if currentPath !== '/'}
        <a href={base + '/'} class="link">
          <button
            class="dark:border-secondary hover:border-cyan-800 border-cyan-700 dark:text-secondary rounded-xl border px-4 py-1 text-sm text-primary transition hover:scale-105"
          >
            ◀ Go home
          </button>
        </a>
      {/if}
      <ThemeSwitcher />
    </div>
  </section>
</header>
