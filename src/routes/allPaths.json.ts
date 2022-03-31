export async function get() {
	const modules = import.meta.glob('./reflections/*.md');
	const allPaths = [];
	for (const path in modules) {
		allPaths.push(path.slice(2, -3));
	}
	return {
		body: allPaths
	};
}
