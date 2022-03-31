<script context="module" lang="ts">
	/** @type {import('./dates').Load} */
	import type { IPost } from '$lib/models/interfaces/ipost.interface';

	export const load = async ({ fetch, stuff }) => {
		const dayOfLent = stuff.dayOfLent;
		//hit endpoint to get post for current day of lent or first day of lent if outside of lent
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
	export let dailyPost: IPost;
</script>

<svelte:head>
	<title>Meditations for Lent</title>
</svelte:head>
<div class="grid gap-6">
	<article>
		{@html dailyPost.html}
	</article>
</div>
