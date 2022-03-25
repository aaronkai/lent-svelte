<script context="module">
	// feed posts to page as props

	export const load = async ({ fetch }) => {
		const posts = await fetch('/reflections/allMeta.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
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
	export let posts;
</script>

<div class="h-full min-h-screen grid grid-rows-[auto_1fr_auto] bg-purple-50">
	<Header />
	<main
		class="grid grid-rows-[auto_1fr] sm:grid-rows-none sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_4fr] "
	>
		<TableOfContents {posts} />
		<div class="p-6 sm:p-9 justify-self-center pb-12">
			<slot />
		</div>
	</main>
	<Footer />
</div>
