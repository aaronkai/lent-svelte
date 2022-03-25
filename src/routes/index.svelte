<script context="module">
	// feed posts to page as props

	export const load = async ({ fetch }) => {
		const posts = await fetch('/reflections/allMeta.json');
		const dates = await fetch('/dates.json');

		const allPosts = await posts.json();
		const { dayOfLent, startOfLent } = await dates.json();

		const postURL = `/reflections/${dayOfLent}.json`;
		const post = await fetch(postURL);
		const dailyPost = await post.json();

		return {
			props: {
				posts: allPosts,
				startOfLent,
				dayOfLent,
				dailyPost
			}
		};
	};
</script>

<script>
	import '$lib/styles/markdown.css';
	// export let posts;
	// export let startOfLent;
	// export let dayOfLent;
	// export let postOfTheDay;
	export let dailyPost;
</script>

<svelte:head>
	<title>Meditations for Lent</title>
</svelte:head>
<article class="markdown">
	{@html dailyPost.html}
</article>
