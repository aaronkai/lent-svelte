<script>
	import { onMount } from 'svelte';
	import { Accordion } from '$lib/utils/Accordion';
	import { getWeek } from '$lib/utils/functions';
	export let posts;
	const weeks = [1, 2, 3, 4, 5, 6];

	// animate details elements
	onMount(() => {
		document.querySelectorAll('details').forEach((el) => {
			new Accordion(el);
		});
	});
</script>

<!-- TODO: write JS to make current week open -->

<aside class="bg-purple-100 p-6 grid  content-start">
	{#each weeks as week}
		<details>
			<summary class="font-bold font-serif text-2xl text-purple-900">
				Week {week}
			</summary>
			<div class="content">
				<ul class="pl-9">
					{#each getWeek(week, posts) as post}
						<li id={post.meta.day}>
							<a class="text-lg" href="./reflections/{post.path}">{post.meta.title}</a>
						</li>
					{/each}
				</ul>
			</div>
		</details>
	{/each}
</aside>

<style>
	details summary ~ * {
		animation: sweep 0.5s ease-in-out;
	}

	@keyframes sweep {
		0% {
			opacity: 0;
			transform: translateX(-10px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
