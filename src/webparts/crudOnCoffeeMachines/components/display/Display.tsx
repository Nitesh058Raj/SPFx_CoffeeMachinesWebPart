import * as React from "react";
import styles from "./Display.module.scss";
import { Header } from "./header/Header";
import { List } from "./list/List";
import { Footer } from "./footer/Footer";
import { IItem} from "../../services/IService";
import { IDisplayProps } from "./IDisplay";
import { DeletePopUp } from "../../modals/deletePopup/DeletePopUp";

export const Display: React.FC<IDisplayProps> = ({ onCreate, onEdit, service }) => {

	// State variables
	const [filters, setFilters] = React.useState({ type: 'All', status: 'All' });
	const [searchTerm, setSearchTerm] = React.useState('');
	const [items, setItems] = React.useState<IItem[]>([]);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [sortOption, setSortOption] = React.useState('');
	const [deletePopUp, setDeletePopUp] = React.useState(false);
	const [deleteItemId, setDeleteItemId] = React.useState(0);
	const itemsPerPage = 10;
	
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const fetchItems = async (): Promise<any> => {

		const data =  await service.getMachines({
			filters,
			searchTerm,
			sortOption,
			currentPage,
			itemsPerPage,
		});
		setDeletePopUp(false);
		setItems(data);
	};


	// Fetch items (could be done in a useEffect, service interaction)
	React.useEffect( () => {
		// eslint-disable-next-line  @typescript-eslint/no-floating-promises
		fetchItems();
	}, [filters, searchTerm, sortOption, currentPage]);


	return(
		<>
			<div className={styles.displayContainer}>
				<Header
					filters={filters}
					setFilters={setFilters}
					searchTerm={searchTerm} 
					setSearchTerm={setSearchTerm}
					onCreate={onCreate}
				/>
				<List items={items} onEdit={onEdit} _handleDelete={(id) => { setDeleteItemId(id); setDeletePopUp(true); } } />
				<Footer
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					sortOption={sortOption}
					setSortOption={setSortOption}
				/>
			</div>

			{
				deletePopUp && (<DeletePopUp
						id={deleteItemId}
						service={service} fetchItems={fetchItems} 
						_handleCancelDelete={() => setDeletePopUp(false)}
					/>
				)
			}
		</>
	)
}