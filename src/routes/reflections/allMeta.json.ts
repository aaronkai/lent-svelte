export async function get() {
	const allPostFiles = import.meta.glob('./*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const resolvedPost = await resolver();
			const postPath = path.slice(2, -3);

			return {
				meta: resolvedPost.metadata,
				path: postPath
			};
		})
	);

	const sortedPosts = allPosts.sort((a, b) => {
		return a.meta.day-b.meta.day
	});
	
	return {
		body: sortedPosts
	};
}
