<script>
	import '$lib/styles/markdown.css';
	export let title = '';
	export let scripture;
	// export let day;
	export let subtitle;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<!-- TODO: Add pagination -->

<article class="grid w-full gap-12 max-w-content-3">
	<header class="grid gap-3">
		<h1 class="mt-6 mb-4 text-5xl font-bold capitalize">{title}</h1>
		{#if subtitle}
			<h2 class="font-bold text-3xl">{subtitle}</h2>
		{/if}
		{#if scripture}
			<h2 class="italic text-xl">{scripture}</h2>
		{/if}
	</header>
	<div class="markdown">
		<slot />
	</div>
</article>
