<script>
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';

	let currentPath = '';

	afterNavigate(() => {
		if (typeof window !== 'undefined') {
			currentPath = window.location.pathname;
		}
	});
</script>

<nav class="flex gap-2">
	<a
		class:font-bold={currentPath === `${base}/`}
		class="text-cyan-600 dark:text-cyan-500 font-medium hover:underline"
		href="{base}/">Home</a
	>
	<a
		class:font-bold={currentPath === `${base}/books/`}
		class="text-cyan-600 dark:text-cyan-500 font-medium hover:underline"
		href="{base}/books">Books</a
	>
</nav>
