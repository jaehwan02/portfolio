export interface NotionPage {
	object: string;
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: NotionUser;
	last_edited_by: NotionUser;
	cover: Cover;
	icon: null | string;
	parent: Parent;
	archived: boolean;
	in_trash: boolean;
	properties: Properties;
	url: string;
	public_url: null | string;
}

export interface NotionUser {
	object: string;
	id: string;
}

export interface Cover {
	type: string;
	external: External;
	file: File;
}

export interface File {
	url: string;
}

export interface External {
	url: string;
}

export interface Parent {
	type: string;
	database_id: string;
}

export interface Properties {
	기간: DateProperty;
	Github: UrlProperty;
	설명: RichTextProperty;
	태그: MultiSelectProperty;
	이름: TitleProperty;
}

export interface DateProperty {
	id: string;
	type: string;
	date: DateRange;
}

export interface DateRange {
	start: string;
	end: string;
	time_zone: null | string;
}

export interface UrlProperty {
	id: string;
	type: string;
	url: string;
}

export interface RichTextProperty {
	id: string;
	type: string;
	rich_text: RichText[];
}

export interface RichText {
	type: string;
	text: Text;
	annotations: Annotations;
	plain_text: string;
	href: null | string;
}

export interface Text {
	content: string;
	link: null | string;
}

export interface Annotations {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: string;
}

export interface MultiSelectProperty {
	id: string;
	type: string;
	multi_select: MultiSelectOption[];
}

export interface MultiSelectOption {
	id: string;
	name: string;
	color: string;
}

export interface TitleProperty {
	id: string;
	type: string;
	title: RichText[];
}
