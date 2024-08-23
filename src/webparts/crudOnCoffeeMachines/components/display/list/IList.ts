export interface IListProps {
	items: {
		ID: number;
		Title: string;
		field_1: number;
		field_2: string;
		field_3: string;
		field_9: string[];
	}[];
	onEdit: (id: number) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	service: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	fetchItems: any;
}