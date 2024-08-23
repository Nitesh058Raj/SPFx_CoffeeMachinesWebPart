import * as React from "react";
import styles from "./Header.module.scss";
import { IHeaderProps, IFilters } from "./IHeader";

export const Header: React.FC<IHeaderProps> = ({filters, setFilters, searchTerm, setSearchTerm, onCreate }) => {
	return(
		<>
			<div className={styles.headerContainer}>
				<h2 className={styles.listTitle}>Coffee Machines</h2>
				<table className={styles.ribbon}>
					<tr>
						<td>
						<input 
							className={styles.searchBox} 
							placeholder="🔍 Search"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						</td>
						<td className={styles.filter}>
							Type: 
							<select onChange={
								(e) => setFilters((prev: IFilters) => ({
									...prev,
									type: e.target.value,
								}))
							}>
								<option>All</option>
								<option>Home</option>
								<option>Commercial</option>
							</select>
						</td>
						<td className={styles.filter}>
							Status: 
							<select onChange={
								(e) => setFilters((prev: IFilters) => ({
									...prev,
									status: e.target.value,
								}))
							}>
								<option>All</option>
								<option>Available</option>
								<option>Out of Stock</option>
							</select>
						</td>
						<td>
							<button onClick={onCreate}>+ Add</button>
						</td>
					</tr>
				</table>
			</div>
		</>
	)
}