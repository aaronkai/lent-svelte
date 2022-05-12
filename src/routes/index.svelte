<script context="module" lang="ts">
	/** @type {import('./dates').Load} */
	import type { IPost } from '$lib/models/interfaces/ipost.interface';

	// do not prerender this page to allow dynamic loading
	export const prerender = false;

	export const load = async ({ fetch, stuff }) => {
		const dayOfLent = stuff.dayOfLent;
		const postURL = `/reflections/${dayOfLent}.json`;
		const post = await fetch(postURL);
		const dailyPost: IPost = await post.json();
		return {
			props: {
				dailyPost
			}
		};
	};
</script>

<script lang="ts">
	import '$lib/styles/markdown.css';
	export let dailyPost: IPost = '';
</script>

<svelte:head>
	<title>Meditations for Lent</title>
	<meta name="description" content="Meditations for Lent by St. Thomas Aquinas" />
</svelte:head>
<div class="grid gap-6">
	<article>
		{@html dailyPost.html}
	</article>
</div>
