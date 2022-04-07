<script <script>
	import '$lib/styles/markdown.css';
	import Pagination from '$lib/components/Pagination.svelte';
	export let title = '';
	export let scripture = '';
	export let subtitle = '';
	export let day = 0;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Pagination {day} />
<article class=" w-full max-w-content-3">
	<header class="">
		<h1 class="mt-6 mb-12 text-4xl md:text-5xl font-bold capitalize">{title}</h1>
		<div class="mb-6">
			{#if subtitle}
				<h2 class="font-bold text-3xl mb-1 sm:mb-3 md:text-4xl italic">{subtitle}</h2>
			{/if}
			{#if scripture}
				<h2 class="italic text-xl">{scripture}</h2>
			{/if}
		</div>
	</header>
	<div class="markdown">
		<slot />
	</div>
	<Pagination {day} />
</article>
