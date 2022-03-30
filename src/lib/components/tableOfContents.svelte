<script>
	import { onMount } from 'svelte';
	import { Accordion } from '$lib/utils/Accordion';
	import getWeek from '$lib/utils/getWeek';
	export let allPostsMeta;
	const weeks = [0, 1, 2, 3, 4, 5, 6];

	// animate details elementsWeek
	onMount(() => {
		document.querySelectorAll('details').forEach((el) => {
			new Accordion(el);
		});
	});
</script>

<!-- TODO: write JS to make current week open -->

<aside
	class="bg-purple-100 p-6 grid content-start border-b-purple-300 sm:border-b-0 sm:border-r-purple-300 border-2"
>
	{#each weeks as week}
		<details>
			<summary class="font-bold font-serif text-2xl text-purple-900">
				Week {week}
			</summary>
			<div class="content">
				<ul class="pl-9">
					{#each getWeek(week, allPostsMeta) as post}
						<li class="list-decimal" id={post.meta.day}>
							<a class="text-lg" href="/reflections/{post.path}">{post.meta.title}</a>
						</li>
					{/each}
				</ul>
			</div>
		</details>
	{/each}
</aside>
