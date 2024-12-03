<script lang="ts">
  import { fly } from 'svelte/transition';
  import { theme } from '$lib/theme.svelte';

  let visible = false;
  setTimeout(() => (visible = true));
</script>

{#if visible}
  <button on:click={theme.toggle} aria-label="Toggle theme">
    {#if theme.current === 'dark'}
      <div in:fly={{ x: 10 }}>🌙</div>
    {:else}
      <div in:fly={{ x: -10 }}>☀️</div>
    {/if}
  </button>
{/if}
