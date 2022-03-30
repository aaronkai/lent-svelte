import type { IAllPosts } from '$lib/models/interfaces/iAllPosts.interface';
import type { IPaginationPaths } from '$lib/models/interfaces/IPaginationPaths.interface';
export function getPagination(allPostMeta: IAllPosts[], dayOfLent: number): IPaginationPaths {
	let previousDayPath;
	let nextDayPath;
	if (dayOfLent === 0) {
		previousDayPath = '<a class="pointer-events-none">Previous Day</a>';
	} else {
		previousDayPath = allPostMeta.filter((post) => {
			if (post.meta.day === dayOfLent - 1) {
				return post;
			}
		})[0].path;
	}
	if (dayOfLent === 45) {
		nextDayPath = '<a class="pointer-events-none">Next Day</a>';
	} else {
		nextDayPath = allPostMeta.filter((post) => {
			if (post.meta.day === dayOfLent + 1) {
				return post;
			}
		})[0].path;
	}
	return { previousDayPath, nextDayPath };
}
