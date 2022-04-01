<script>
	import { onMount } from 'svelte';
	import { Accordion } from '$lib/utils/Accordion';
	export let allPostsMeta;

	// animate details elementsWeek
	onMount(() => {
		document.querySelectorAll('details').forEach((el) => {
			new Accordion(el);
		});
	});
</script>

<!-- TODO:  bold current day -->

<aside
	class="bg-purple-100 p-6 grid content-start border-b-purple-300 sm:border-b-0 sm:border-r-purple-300 border-2"
>
	<h1>The Days Of Lent</h1>
	<div class="content">
		<ul class="pl-9">
			{#each allPostsMeta as post}
				<li class="list-decimal" id={post.meta.day}>
					<a class="text-lg" href="/reflections/{post.path}">{post.meta.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>
