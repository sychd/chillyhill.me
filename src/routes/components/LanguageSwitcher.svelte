<script lang="ts">
  import { fade } from 'svelte/transition';

  let languages = ['🇬🇧', '🇩🇪', '🇺🇦', 'RU'];
  let selectedLanguage = languages[0];
  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function selectLanguage(lang: string) {
    selectedLanguage = lang;
    isOpen = false;
  }
</script>

<div class="relative inline-block text-left">
  <button
    class="flex w-12 items-center justify-center bg-transparent px-1 py-2 text-2xl focus:outline-none dark:text-white"
    on:click={toggleDropdown}
  >
    <span>{selectedLanguage}</span>
  </button>

  {#if isOpen}
    <div
      class="absolute right-0 z-10 mt-1 w-12 origin-top-right rounded-md border border-gray-200 bg-white shadow-lg"
      transition:fade
    >
      {#each languages as lang}
        {#if lang !== selectedLanguage}
          <button
            class="block cursor-pointer px-3 py-2 text-center hover:bg-gray-100"
            on:click={() => selectLanguage(lang)}
          >
            <span class="text-md">{lang}</span>
          </button>
        {/if}
      {/each}
    </div>
  {/if}
</div>
