<script>
	export let day;

	let hasPrev = day > 0;
	let hasNext = day < 45;
</script>

<nav class="flex justify-between items-center text-lg ">
	{#if hasPrev}
		<a class="flex-1 text-xl font-semibold" href={`/reflections/${day - 1}`}>&#8249; Prev</a>
	{/if}

	{#if hasNext}
		<a class="flex-1 text-right text-xl font-semibold" href={`/reflections/${day + 1}`}
			>Next &#8250;</a
		>
	{/if}
</nav>
