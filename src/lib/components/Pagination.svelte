<script>
	export let allPaths;
	export let dayOfLent;
	// console.log(dayOfLent);
	// console.log(allPaths[dayOfLent]);

	let hasPrev = dayOfLent > 0;
	let hasNext = dayOfLent <= allPaths.length;
</script>

<nav class="flex justify-between items-center ">
	{#if hasPrev}
		<a
			on:click={() => {
				dayOfLent = dayOfLent - 1;
			}}
			href={allPaths[dayOfLent - 1]}>Prev</a
		>
	{/if}

	{#if hasNext}
		<a
			on:click={() => {
				dayOfLent = dayOfLent + 1;
			}}
			href={allPaths[dayOfLent + 1]}>Next</a
		>
	{/if}
</nav>
