<script lang="ts" context="module">
	import type { IDates } from '$lib/models/interfaces/idates.interface';
	import type { IAllPosts } from '$lib/models/interfaces/iAllPosts.interface';

	export const load = async ({ fetch }) => {
		const posts = await fetch('/reflections/allMeta.json');
		const dates = await fetch('/dates.json');

		const allPostsMeta: IAllPosts = await posts.json();
		const { dayOfLent }: IDates = await dates.json();

		return {
			props: {
				allPostsMeta,
				dayOfLent
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
	import TableOfContents from '$lib/components/TableOfContents.svelte';

	export let dayOfLent;
	export let allPostsMeta;
</script>

<div class="h-full min-h-screen grid grid-rows-[auto_1fr_auto] bg-purple-50">
	<Header />
	<main class="grid grid-rows-[auto_1fr] lg:grid-rows-none lg:grid-cols-[auto_1fr] ">
		<TableOfContents {allPostsMeta} {dayOfLent} />
		<div class="p-6 sm:p-9 justify-self-center pb-12">
			<slot />
		</div>
	</main>
	<Footer />
</div>
