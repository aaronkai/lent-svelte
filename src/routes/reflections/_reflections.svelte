<script>
	export let title;
	export let scripture;
	export let day;
</script>

<svelte:head>
	<title>{title}</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/prismjs@1.24.1/themes/prism-twilight.css"
	/>
</svelte:head>

<article class="grid w-full gap-6 p-6 text-stone-800 max-w-prose">
	<header>
		<h1 class="mt-6 mb-4 text-5xl font-bold capitalize">{title}</h1>
	</header>
	<div class="markdown">
		<slot />
	</div>
</article>
