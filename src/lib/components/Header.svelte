<script>
	import Cross from '$lib/components/Cross.svelte';
</script>

<header
	class="flex lg:justify-center items-center p-6 bg-purple-200 border-b-2 border-purple-300 shadow"
>
	<a class="lg:text-center" href="/">
		<div class="grid grid-cols-[auto_1fr] gap-6">
			<Cross />
			<div>
				<h1 class="text-4xl font-bold   md:text-4xl lg:text-6xl">Meditations for Lent</h1>
				<h2 class="italic text-purple-900 text-2xl pt-1  md:text-4xl lg:text-4xl">
					by St. Thomas Aquinas
				</h2>
			</div>
		</div>
	</a>
</header>
