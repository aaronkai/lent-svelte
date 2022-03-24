<script>
	import { getWeek } from '$lib/utils/functions';
	export let posts;
	const weeks = [1, 2, 3, 4, 5, 6];
</script>

<aside>
	{#each weeks as week}
		<h2 class="font-bold">Week {week}</h2>
		<ul>
			{#each getWeek(week, posts) as post}
				<li><a href="./reflections/{post.path}">{post.meta.title}</a></li>
			{/each}
		</ul>
	{/each}
</aside>
