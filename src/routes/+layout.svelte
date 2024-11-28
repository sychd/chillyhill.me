<script lang="ts">
	import LanguageSwitcher from './components/LanguageSwitcher.svelte';
	import ThemeSwitcher from './components/ThemeSwitcher.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="flex flex-col min-h-screen">
		<header class="flex justify-between items-center px-4 py-2 bg-primary bg-opacity-20 dark:bg-gray-800">
			<section class="container">
			<div class="text-3xl font-logo flex items-center">Chillyhill ⛰︎</div>
			<div class=" items-center gap-4 hidden">
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
			</section>
		</header>
		<main class="flex-grow container mx-auto px-4 py-6">
			{@render children()}
		</main>
		<footer class="bg-gray-100 dark:bg-gray-800 p-4">
			<div class="container text-center text-sm text-gray-500 dark:text-gray-400">
				<span class="prose">
					© 2024 Denys Sych
				</span>
			</div>
		</footer>
	</div>

</ParaglideJS>
