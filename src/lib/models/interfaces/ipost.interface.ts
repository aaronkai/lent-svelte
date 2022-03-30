export type IPost = {
	html: string;
	path: string;
	meta: {
		title: string;
		scripture?: string;
		subtitle?: string;
		day: number;
	};
};
