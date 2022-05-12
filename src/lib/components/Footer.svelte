<script>
	export let today;
</script>

<footer
	class="p-3 flex flex-col sm:flex-row justify-around bg-purple-200 border-t-2 border-purple-300"
>
	<a href="/about">About This Site</a>
	<a href="https://aaronhubbard.dev">Aaron Hubbard Web Dev</a>
	<a href="https://kit.svelte.dev">Made with SvelteKit</a>
	<a href="#">Built {today}</a>
</footer>

<style>
	a {
		@apply text-center;
	}
</style>
