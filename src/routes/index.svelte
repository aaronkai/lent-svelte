<script context="module">
	// feed posts to page as props

	export const load = async ({ fetch }) => {
		const posts = await fetch('./reflections/allMeta.json');
		const dates = await fetch('./dates.json');

		const allPosts = await posts.json();
		const { dayOfLent, startOfLent } = await dates.json();

		const postURL = `./reflections/${dayOfLent}.json`;
		// console.log(postURL);
		const post = await fetch(postURL);
		const { path, html, meta } = await post.json();
		// const postOfTheDay = await post;
		// console.log(postOfTheDay);

		return {
			props: {
				posts: allPosts,
				startOfLent,
				dayOfLent,
				meta,
				html,
				path
			}
		};
	};
</script>

<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TableOfContents from '$lib/components/tableOfContents.svelte';

	export let posts;
	export let startOfLent;
	export let dayOfLent;
	export let postOfTheDay;
	export let meta;
	export let html;
	export let path;
	console.log(html);
</script>

<svelte:head>
	<title>Meditations for Lent</title>
</svelte:head>
<Header />
<main class="grid grid-cols-[auto_1fr]">
	<TableOfContents {posts} />
	<article>
		{@html html}
	</article>
</main>
<Footer />
