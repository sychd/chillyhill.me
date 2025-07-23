<script lang="ts">
  import { formatDate } from '$lib/utils';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let { data } = $props();

  // Reading progress state
  let scrollProgress = $state(0);
  let showProgressBar = $state(false);
  let showScrollToTop = $state(false);
  let articleElement: HTMLElement;
  let contentElement: HTMLElement;

  // Local storage key for this specific article
  const storageKey = `reading-progress-${data.meta.title}`;

  // Update scroll progress and save to localStorage
  function updateScrollProgress() {
    if (!articleElement || !contentElement) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const articleTop = articleElement.offsetTop;
    const articleHeight = articleElement.scrollHeight;

    // Calculate progress based on article content
    const articleScrollTop = Math.max(0, scrollTop - articleTop);
    const maxScroll = articleHeight - windowHeight;
    const progress =
      maxScroll > 0 ? Math.min(100, Math.max(0, (articleScrollTop / maxScroll) * 100)) : 0;

    scrollProgress = Math.round(progress);
    showProgressBar = scrollTop > 400;
    showScrollToTop = scrollTop > 300;

    // Save progress to localStorage
    if (browser && scrollProgress > 0) {
      localStorage.setItem(storageKey, scrollProgress.toString());
    }
  }

  // Reset reading progress
  function resetProgress() {
    scrollProgress = 0;
    if (browser) {
      localStorage.removeItem(storageKey);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Restore reading position from localStorage
  function restoreReadingPosition() {
    if (!browser) return;

    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress && articleElement) {
      const progress = parseInt(savedProgress);

      // Don't scroll if progress is very low (0 or 1%) to avoid unwanted scrolling
      if (progress <= 1) {
        return;
      }

      const articleTop = articleElement.offsetTop;
      const articleHeight = articleElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = articleHeight - windowHeight;
      const scrollPosition = articleTop + (maxScroll * progress) / 100;

      // Smooth scroll to saved position after a short delay
      setTimeout(() => {
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }, 100);
    }
  }

  onMount(() => {
    // Set up scroll listener
    const handleScroll = () => updateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial progress calculation
    updateScrollProgress();

    // Restore reading position
    restoreReadingPosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<!-- Reading Progress Bar -->
{#if showProgressBar}
  <div
    class="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm transition-all duration-500 ease-in-out dark:border-gray-700 dark:bg-gray-900/95"
  >
    <div class="relative h-1 bg-gray-200 dark:bg-gray-700">
      <div
        class="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ease-out"
        style="width: {scrollProgress}%"
      ></div>
    </div>
    <div class="container flex items-center justify-between py-2 text-sm">
      <div class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
        <span class="font-medium">Reading Progress: {scrollProgress}%</span>
      </div>
      <button
        onclick={resetProgress}
        class="rounded-md border border-gray-300 px-3 py-1 text-xs font-medium text-gray-500 transition-colors duration-200 hover:border-primary hover:text-primary dark:border-gray-600 dark:text-gray-400 dark:hover:border-secondary dark:hover:text-secondary"
      >
        Reset
      </button>
    </div>
  </div>
{/if}

<article
  bind:this={articleElement}
  class="flex flex-grow flex-col overflow-hidden bg-gray-50 px-4 py-8 text-gray-300 dark:bg-gray-800"
>
  <div class="container flex flex-grow flex-col">
    <hgroup
      class="prose mb-6 flex max-w-full flex-col items-center justify-between dark:prose-invert"
    >
      <h1 class="mb-0 font-bold text-primary dark:text-secondary">
        {data.meta.title}
      </h1>
      <div class="flex items-center italic text-gray-600 dark:text-gray-300">
        <p class="text-sm font-medium">
          Published on {formatDate(data.meta.date)}
        </p>
      </div>
    </hgroup>

    <div
      bind:this={contentElement}
      class="prose prose-lg max-w-full flex-grow dark:prose-invert
             selection:bg-primary/20 prose-headings:text-gray-800
             prose-p:mb-6 prose-p:text-lg
             prose-p:font-normal prose-p:leading-relaxed
             prose-p:text-gray-700 prose-a:text-primary
             prose-a:no-underline hover:prose-a:underline
             prose-blockquote:border-l-primary prose-blockquote:text-gray-600
             prose-strong:text-gray-800 prose-em:text-gray-700
             prose-code:text-primary prose-pre:bg-gray-100
             prose-li:text-lg prose-li:leading-relaxed
             prose-li:text-gray-700 dark:selection:bg-secondary/20
             dark:prose-headings:text-gray-200 dark:prose-p:text-gray-300
             dark:prose-a:text-secondary dark:prose-blockquote:border-l-secondary
             dark:prose-blockquote:text-gray-400 dark:prose-strong:text-gray-200
             dark:prose-em:text-gray-300 dark:prose-code:text-secondary
             dark:prose-pre:bg-gray-900 dark:prose-li:text-gray-300"
      style="
        font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      "
    >
      {@render data.content()}
    </div>
  </div>
</article>

<!-- Scroll to Top Button -->
{#if showScrollToTop}
  <button
    onclick={scrollToTop}
    class="fixed bottom-6 right-6 z-40 transform rounded-full bg-primary p-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-secondary dark:text-gray-900 dark:hover:bg-secondary/90 dark:focus:ring-secondary/50"
    aria-label="Scroll to top"
  >
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </button>
{/if}
