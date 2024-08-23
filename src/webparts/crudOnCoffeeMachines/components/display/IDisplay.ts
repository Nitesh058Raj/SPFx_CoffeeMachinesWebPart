export interface IDisplayProps {
	onCreate: () => void;
	onEdit: (id: number) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	service: any
}