<script lang="ts" context="module">
	import type { IDates } from '$lib/models/interfaces/idates.interface';
	import type { IAllPosts } from '$lib/models/interfaces/iAllPosts.interface';

	export const load = async ({ fetch }) => {
		const posts = await fetch('/reflections/allMeta.json');
		const dates = await fetch('/dates.json');
		const allPathsResponse = await fetch('allPaths.json');

		const allPostsMeta: IAllPosts = await posts.json();
		const { dayOfLent }: IDates = await dates.json();
		const allPaths: String[] = await allPathsResponse.json();

		return {
			props: {
				allPostsMeta,
				dayOfLent,
				allPaths
			},
			stuff: {
				dayOfLent
			}
		};
	};
</script>

<script>
	import '../app.css';
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TableOfContents from '$lib/components/tableOfContents.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let allPostsMeta;
	export let dayOfLent;
	export let allPaths;
</script>

<div class="h-full min-h-screen grid grid-rows-[auto_1fr_auto] bg-purple-50">
	<Header />
	<main
		class="grid grid-rows-[auto_1fr] sm:grid-rows-none sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] "
	>
		<TableOfContents {allPostsMeta} />
		<div class="p-6 sm:p-9 justify-self-center pb-12">
			<Pagination {dayOfLent} {allPaths} />
			<slot />
		</div>
	</main>
	<Footer />
</div>
