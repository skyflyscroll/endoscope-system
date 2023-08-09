interface MenuTree {
	icon?: string;
	index?: string;
	id?: string;
	title?: string;
	permiss?: string;
	subs?: MenuTree[];
}

interface PerimissionTree {
	id: string;
	label: string;
	children?: PerimissionTree[];
}