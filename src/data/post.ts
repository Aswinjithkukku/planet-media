export interface Post {
	date?: string | Date;
	date_gmt?: string | Date;
	guid: {
		rendered: string;
	};
	id: number;
	link: string;
	modified: string | Date;
	modified_gmt: string | Date;
	slug: string;
	status: string;
	type: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
		protected: boolean;
	};
	excerpt: {
		rendered: string;
		protected: boolean;
	};
	author: number;
	featured_media: number;
	comment_status: string;
	ping_status: string;
	sticky: boolean;
	template: string;
	format: string;
	meta: {
		footnotes: string;
	};
	categories: number[];
	tags: string[];
}
