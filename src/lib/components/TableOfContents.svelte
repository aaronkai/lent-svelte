<script>
	import { onMount } from 'svelte';
	import { Accordion } from '$lib/utils/Accordion';
	export let allPostsMeta;
	export let dayOfLent;
	let y = 0;
	let isOpen = false;

	$: y > 1024 ? (isOpen = true) : (isOpen = false);

	// animate details
	onMount(() => {
		document.querySelectorAll('details').forEach((el) => {
			new Accordion(el);
		});
	});
</script>

<svelte:window bind:innerWidth={y} />

<aside
	class="bg-purple-100 p-3 sm:p-6 grid content-start border-b-purple-300 lg:border-b-0 sm:border-r-purple-300 border-2"
>
	<details open={isOpen}>
		<summary
			class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-purple-900"
		>
			Table of Contents
		</summary>
		<div class="content pt-6">
			<h2 class="text-2xl font-bold">The Days of Lent</h2>
			<ul class="pl-9">
				{#each allPostsMeta as post, i}
					<li class="list-decimal" id={post.meta.day}>
						{#if dayOfLent == i}
							<a class="text-xl underline font-bold" href="/reflections/{post.path}"
								>{post.meta.title}</a
							>
						{:else}
							<a class="text-lg" href="/reflections/{post.path}">{post.meta.title}</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</details>
</aside>
