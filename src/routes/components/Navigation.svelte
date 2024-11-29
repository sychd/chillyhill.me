<script lang="ts">
  import { base } from '$app/paths';
  import { afterNavigate } from '$app/navigation';

  let currentPath = $state('');

  afterNavigate(() => {
    if (typeof window !== 'undefined') {
      currentPath = window.location.pathname;
    }
  });

  const isActive = (path: string) => currentPath === path;
</script>

<nav class="flex gap-2">
  <a
    class:active={isActive('/')}
    class="text-cyan-600 dark:text-secondary font-medium hover:underline"
    href="{base}/">Home</a
  >
  <a
    class:active={isActive('/books/')}
    class="text-cyan-600 dark:text-secondary font-medium hover:underline"
    href="{base}/books">Books</a
  >
</nav>

<style>
  .active {
    @apply font-bold; /* To always include font-bold in the build, yet have it conditionally */
  }
</style>
