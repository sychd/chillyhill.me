<script>
    import { onMount } from 'svelte';

    let darkMode = false;

    function toggleTheme() {
        darkMode = !darkMode;
        document.documentElement.classList.toggle('dark', darkMode);
    }

    onMount(() => {
        darkMode = document.documentElement.classList.contains('dark');
    });
</script>

<button
        on:click={toggleTheme}
        class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
>
    {darkMode ? '🌙' : '☀️'}
</button>
