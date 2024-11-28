<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import LanguageSwitcher from './components/LanguageSwitcher.svelte';
	import ThemeSwitcher from './components/ThemeSwitcher.svelte';
	import Navigation from './components/Navigation.svelte';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="flex min-h-screen flex-col">
		<header class="dark:bg-gray-800 bg-secondary flex items-center justify-between px-4 py-2">
			<section class="container flex items-center justify-between">
				<a href={`${base}/`} class="flex items-center font-logo text-3xl text-primary"
					>Chillyhill ⛰︎</a
				>
				<script>
				</script>

				<Navigation />
				<div class=" hidden items-center gap-4">
					<LanguageSwitcher />
					<ThemeSwitcher />
				</div>
			</section>
		</header>
		<main class="container mx-auto flex-grow px-4 py-6">
			{@render children()}
		</main>
		<footer class="bg-secondary dark:bg-gray-800 p-4">
			<div class="text-gray-500 dark:text-gray-400 container text-center text-sm">
				© 2024 Denys Sych
			</div>
		</footer>
	</div>
</ParaglideJS>
