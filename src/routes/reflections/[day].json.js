export async function get({ params }) {
	const allPostFiles = import.meta.glob('./week-*/*.md');
	let found;
	let path;
	for (const post in allPostFiles) {
		const resolvedFile = await allPostFiles[post]();
		if (resolvedFile.metadata.day == params.day) {
			found = resolvedFile;
			path = post.slice(2, -3);
			break;
		}
	}
	if (found) {
		const { html } = found.default.render();
		return {
			body: {
				html: html,
				path: path,
				meta: found.metadata
			},
			status: 200
		};
	} else {
		return {
			status: 404,
			body: 'Not found'
		};
	}
}
