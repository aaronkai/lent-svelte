<script>
	import '$lib/styles/markdown.css';
	export let title;
	export let scripture;
	export let day;
	export let subtitle;
</script>

<svelte:head>
	<title>{title}</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/prismjs@1.24.1/themes/prism-twilight.css"
	/>
</svelte:head>

<!-- TODO: Add pagination -->

<article class="grid w-full gap-6 p-6 text-stone-800 max-w-prose">
	<header class="grid gap-3">
		<h1 class="mt-6 mb-4 text-5xl font-bold capitalize">{title}</h1>
		{#if { scripture }}
			<h2 class="font-bold text-3xl">{subtitle}</h2>
		{/if}
		{#if { scripture }}
			<h2 class="italic text-3xl">{scripture}</h2>
		{/if}
		<div class="markdown">
			<slot />
		</div>
	</header>
</article>
