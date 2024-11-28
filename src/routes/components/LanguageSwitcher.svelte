<script lang="ts">
    let languages = ['🇬🇧', '🇩🇪', '🇺🇦', '🇷🇺'];
    let selected = 0;

    function selectLanguage(i: number) {
        selected = i;
    }
</script>

<div class="flex gap-2">
    {#each languages as lang, i}
        <button
                class="text-lg p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                class:selected={selected === i}
                on:click={() => selectLanguage(i)}
        >
            {lang}
        </button>
    {/each}
</div>

<style>
  button.selected {
    font-weight: bold;
    border: 2px solid currentColor;
  }
</style>
