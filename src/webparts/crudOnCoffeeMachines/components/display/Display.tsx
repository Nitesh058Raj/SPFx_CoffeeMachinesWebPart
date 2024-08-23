import * as React from "react";
import styles from "./Display.module.scss";
import { Header } from "./header/Header";
import { List } from "./list/List";
import { Footer } from "./footer/Footer";
import { IItem} from "../../services/IService";
import { IDisplayProps } from "./IDisplay";

export const Display: React.FC<IDisplayProps> = ({ onCreate, onEdit, service }) => {

	// State variables
	const [filters, setFilters] = React.useState({ type: 'All', status: 'All' });
	const [searchTerm, setSearchTerm] = React.useState('');
	const [items, setItems] = React.useState<IItem[]>([]);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [sortOption, setSortOption] = React.useState('');
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
				<List items={items} onEdit={onEdit} service={service} fetchItems={fetchItems} />
				<Footer
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					sortOption={sortOption}
					setSortOption={setSortOption}
				/>
			</div>
		</>
	)
}