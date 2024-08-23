
export interface IHeaderProps {
	filters: IFilters; 
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setFilters: any;
	searchTerm: string; 
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setSearchTerm: any;
	onCreate: () => void;
}

export interface IFilters {
	type: string; 
	status: string; 
}