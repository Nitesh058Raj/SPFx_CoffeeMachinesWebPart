import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import {  SPFI, spfi, SPFx } from "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { IGetMachines, IItem, ICreateItem, IFullItem } from "./IService";
import { generateFilterQuery, generateSortOptions } from "./HelperFuncs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CoffeeMachineService = (context: WebPartContext) : any => {

	const sp: SPFI = spfi().using(SPFx(context));
	const listname: string = "CoffeeMachines";

	const list = sp.web.lists.getByTitle(listname);

	const getMachines = async ({ filters, searchTerm, sortOption, currentPage, itemsPerPage } : IGetMachines): Promise<IItem[] | undefined> => {
		try {
			const filterQuery = generateFilterQuery(filters, searchTerm); 
			const sortOptions = generateSortOptions(sortOption);
//debugger
			const spItems = await list.items
									.filter(filterQuery)
									.orderBy(sortOptions.columnName, sortOptions.order === "asc")
									.select("ID","Title","field_1", "field_2", "field_3", "field_9")
									.skip((currentPage - 1)* 10).top(10)();

			const items = spItems.map((item) => {
				return {
					ID: item.ID,
					Title: item.Title,
					field_1: item.field_1,		// Price
					field_2: item.field_2,		// Product_Type
					field_3: item.field_3,		// Primary_Color
					field_9: item.field_9		// Status
					};
				});

			return items;
		} catch(e) {
			console.error("[Get] Error: ", e);
		}
	}

	const createMachine = async (item : ICreateItem) : Promise<void> => {
		try {
			await list.items.add(item);
		} catch(e) {
			console.error("[Create] Error: ", e);
		}
	}

	const getMachine = async (id: number) : Promise<IFullItem | undefined> => {
		try {
			const spItem = await list.items.getById(id)();

			const item: IFullItem = {

				Title: spItem.Title,
				field_1: spItem.field_1,
				field_2: spItem.field_2,
				field_3: spItem.field_3,
				field_4: spItem.field_4,
				field_5: spItem.field_5,
				field_6: spItem.field_6,
				field_7: spItem.field_7,
				field_8: spItem.field_8,
				field_9: spItem.field_9
			}

			return item;

		} catch (e) {
			console.error("[Get] Error: ", e);
		}
	}

	const updateMachine = async (id: number, item: ICreateItem) : Promise<void | undefined> => {
		try {
			await list.items.getById(id).update(item);
		} catch(e) {
			console.error("[Update] Error: ", e);
		}
	}

	const deleteMachine = async (id: number) : Promise<void | undefined> => {
		try {
			await list.items.getById(id).delete();
		} catch(e) {
			console.error("[Delete] Error: ", e);
		}
	}

	return { 
		getMachines,
		getMachine,
		createMachine,
		updateMachine,
		deleteMachine,
	};
};