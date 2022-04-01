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

<Pagination {day} />
<article class="grid w-full gap-12 max-w-content-3">
	<header class="grid gap-3">
		<h1 class="mt-6 mb-4 text-4xl md:text-5xl font-bold capitalize">{title}</h1>
		{#if subtitle}
			<h2 class="font-bold text-3xl md:text-4xl italic">{subtitle}</h2>
		{/if}
		{#if scripture}
			<h2 class="italic text-xl">{scripture}</h2>
		{/if}
	</header>
	<div class="markdown">
		<slot />
	</div>
	<Pagination {day} />
</article>
