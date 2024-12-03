<script lang="ts">
  import { fly } from 'svelte/transition';
  import { theme } from '$lib/theme.svelte';
</script>

<button on:click={theme.toggle} aria-label="Toggle theme">
  {#if theme.current === 'dark'}
    <div in:fly={{ x: 10 }}>🌑</div>
  {:else}
    <div in:fly={{ x: -10 }}>☀️</div>
  {/if}
</button>

<style>
</style>
