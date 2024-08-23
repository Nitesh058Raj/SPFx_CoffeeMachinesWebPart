export interface IGetMachines {
	filters: IFilters;
	searchTerm: string;
	sortOption: string;
	currentPage: number;
	itemsPerPage: number;
}

export interface IFilters {
	type: string; 
	status: string; 
}

export interface IItem {
	ID: number;
	Title: string;
	field_1: number;
	field_2: string;
	field_3: string;
	field_9: string[];
}

export interface ICreateItem {
	Title: string;
	field_1: number;
	field_9: string[];
	field_5: string;
	field_7: string;
	field_2: string;
	field_3: string;
	field_6: string;
	field_8: string;
}

export interface IFullItem {

	Title: string;
	field_1: number;
	field_9: string[];
	field_5: string;
	field_7: string;
	field_2: string;
	field_3: string;
	field_6: string;
	field_8: string;
	field_4: {
		Description: string;
		Url: string;
	}
}