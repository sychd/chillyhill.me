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
    class="flex text-2xl dark:text-white items-center justify-center w-12 px-1 py-2 bg-transparent   focus:outline-none"
    on:click={toggleDropdown}
  >
    <span >{selectedLanguage}</span>
  </button>

  {#if isOpen}
    <div
      class="absolute right-0 z-10 w-12 mt-1 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg"
      transition:fade
    >
      {#each languages as lang}
        {#if lang !== selectedLanguage}
        <button
          class="block px-3 py-2 text-center cursor-pointer hover:bg-gray-100"
          on:click={() => selectLanguage(lang)}
        >
          <span class="text-md">{lang}</span>
        </button>
          {/if}
      {/each}
    </div>
  {/if}
</div>
