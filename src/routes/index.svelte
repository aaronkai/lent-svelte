<script context="module" lang="ts">
	/** @type {import('./dates').Load} */
	import type { IDates } from '$lib/models/interfaces/idates.interface';
	import type { IPost } from '$lib/models/interfaces/ipost.interface';
	import type { IAllPosts } from '$lib/models/interfaces/iAllPosts.interface';

	export const load = async ({ fetch }) => {
		// hit endpoints to get post metadata and day of lent we're in.
		const posts = await fetch('/reflections/allMeta.json');
		const dates = await fetch('/dates.json');
		const allPostsMeta: IAllPosts[] = await posts.json();
		const { dayOfLent, startOfLent }: IDates = await dates.json();

		//hit endpoint to get post for current day of lent or first day of lent if outside of lent
		const postURL = `/reflections/${dayOfLent}.json`;
		const post = await fetch(postURL);
		const dailyPost: IPost = await post.json();
		return {
			props: {
				allPostsMeta,
				startOfLent,
				dayOfLent,
				dailyPost
			}
		};
	};
</script>

<script lang="ts">
	import '$lib/styles/markdown.css';

	export let allPostsMeta: IAllPosts[];
	export let dayOfLent: number;
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
