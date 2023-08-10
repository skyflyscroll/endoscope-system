export interface MenuTree {
	icon?: string;
	index?: string;
	id?: string;
	title?: string;
	permiss?: string;
	subs?: MenuTree[];
}

export interface PerimissionTree {
	id: string;
	label: string;
	children?: PerimissionTree[];
}