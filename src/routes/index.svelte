<script context="module">
	// feed posts to page as props
	export const load = async ({ fetch }) => {
		const posts = await fetch('./reflections/allMeta.json');
		const allPosts = await posts.json();
		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	import { getWeek } from '$lib/utils/functions';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	export let posts;

	const weeks = [1, 2, 3, 4, 5, 6];
</script>

<Header />
<h1>Hello world</h1>
<aside>
	<ul>
		<!-- {#each posts as post}
			<li><a href="./reflections/{post.path}">{post.meta.title}</a></li>
		{/each} -->
		{#each weeks as week}
			<h2 class="font-bold">Week {week}</h2>
			{#each getWeek(week, posts) as post}
				<p>{post.meta.title}</p>
			{/each}
		{/each}
	</ul>
</aside>
<Footer />
