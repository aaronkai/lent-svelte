<script>
	export let day;
	console.log(day);
	// console.log(allPaths[dayOfLent]);

	let hasPrev = day > 0;
	let hasNext = day < 45;
</script>

<nav class="flex justify-between items-center text-lg">
	{#if hasPrev}
		<a class="flex-1" href={`/reflections/${day - 1}`}>Prev</a>
	{/if}

	{#if hasNext}
		<a class="flex-1 text-right" href={`/reflections/${day + 1}`}>Next</a>
	{/if}
</nav>
