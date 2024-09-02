import * as React from "react";
import styles from "./Footer.module.scss";
import { IFooterProps } from "./IFooter";

export const Footer: React.FC<IFooterProps> = ({currentPage, setCurrentPage, sortOption, setSortOption}) => {
	return(
		<>
			<div className={styles.footerContainer}>
				<div className={styles.sort}>
					<div className={styles.sortByText}>
					Sort By
					</div>
						<select className={styles.sortOptions} onChange={(e) => setSortOption(e.target.value)}>
							<option> </option>
							<option>Price [Asc]</option>
							<option>Price [Des]</option>
							<option>Name [Asc]</option>
							<option>Name [Des]</option>
						</select>
				</div>
				<div className={styles.paginationBox}>
					<button onClick={() => setCurrentPage(1)}  disabled={currentPage === 1}> {'<<'}  </button>
					<button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}> {'<'} </button>
					<div className={styles.activeNum}> {currentPage} </div> 
					<button onClick={() => setCurrentPage(currentPage + 1)} > {'>'} </button>
					<button onClick={() => setCurrentPage(currentPage + 2)}> {'>>'} </button>
				</div>
			</div>
		</>
	)
}