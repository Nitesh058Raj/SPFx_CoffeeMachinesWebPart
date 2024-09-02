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

	_handleDelete: (id: number) => void;
}