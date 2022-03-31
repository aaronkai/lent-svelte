<script context="module">
	export const load = async ({ context }) => {
		console.log('Hello');
	};
</script>

<script <script>
	import '$lib/styles/markdown.css';
	import Pagination from '$lib/components/Pagination.svelte';
	export let title = '';
	export let scripture;
	export let subtitle;
	export let day;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<!-- TODO: Add pagination -->
<Pagination {day} />
<article class="grid w-full gap-12 max-w-content-3">
	<header class="grid gap-3">
		<h1 class="mt-6 mb-4 text-6xl font-bold capitalize">{title}</h1>
		{#if subtitle}
			<h2 class="font-bold text-4xl">{subtitle}</h2>
		{/if}
		{#if scripture}
			<h2 class="italic text-3xl">{scripture}</h2>
		{/if}
	</header>
	<div class="markdown">
		<slot />
	</div>
</article>
