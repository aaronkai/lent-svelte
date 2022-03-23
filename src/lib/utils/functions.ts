export function getWeek(weekNumber, posts) {
	const regex = new RegExp(`week-${weekNumber}`);
	console.log({ regex });
	const matchingPosts = posts.filter((post) => {
		if (regex.test(post.path)) {
			return post;
		}
	});
	return matchingPosts;
}
