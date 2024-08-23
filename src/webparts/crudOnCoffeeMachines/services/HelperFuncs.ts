import { IFilters } from "./IService";

export const generateFilterQuery = (filters: IFilters, searchTerm:string): string => {
		
	let query = "Title ne ''";
	const type = filters.type;
	const status = filters.status;

	if (type === "All" && status === "All") {
		query = "Title ne ''";
	} else if (type !== "All" && status === "All") {
		if(type === "Home") {
			query = "field_2 eq 'At Home Espresso Machine' or field_2 eq 'At Home Coffee Makers' ";
		} else {
			query = "field_2 eq 'Commercial Coffee Makers' or field_2 eq 'Commercial Espresso Machines'";
		}
	} else if (type === "All" && status !== "All") {
		if (status === "Available") {
			query = "field_9 eq 'Available'";
		} else {
			query = "field_9 eq 'Out of Stock'";
		}
	} else {
		if(type === "Home") {
			query = `(field_2 eq 'At Home Espresso Machine' or field_2 eq 'At Home Coffee Makers' ) and field_9 eq '${status}'`;
		} else {
			query = `(field_2 eq 'Commercial Coffee Makers' or field_2 eq 'Commercial Espresso Machines' ) and field_9 eq '${status}'`;
		}
	}

	if (searchTerm !== "") {
		query += ` and substringof('${searchTerm}', Title)`;
	}

	return query;
}


export const generateSortOptions = (sortOption: string) : {columnName: string; order: string} => {
	let sortOptions = {
		columnName: "ID",
		order: "asc"
	}

	if(sortOption === "") return sortOptions;

	switch(sortOption){
		case "Price [Asc]":
			sortOptions = {
				columnName: "field_1",
				order: "asc"
			}
			break;
		case "Price [Des]":
			sortOptions = {
				columnName: "field_1",
				order: "des"
			}
			break;
		case "Name [Asc]":
			sortOptions = {
				columnName: "Title",
				order: "asc"
			}
			break;
		case "Name [Des]":
			sortOptions = {
				columnName: "Title",
				order: "des"
			}
			break;
	}

	return sortOptions;
}