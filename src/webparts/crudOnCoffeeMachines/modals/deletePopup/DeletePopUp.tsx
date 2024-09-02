import * as React from "react";
import styles from "./DeletePopUp.module.scss";
import { DeletePopUpProps } from "./IDeletePopUp";

export const DeletePopUp: React.FC<DeletePopUpProps> = ({id, service, _handleCancelDelete, fetchItems}) => {

	const _handleConfirmDelete = async (id: number): Promise<void> => {
		await service.deleteMachine(id);
		fetchItems();
	}

	return(
		<>
			<div className={styles.deletePopUpContainer}>
				<div className={styles.box}>
					<p>Are you sure ?</p>
					<div className={styles.btns}>
						<button onClick = {() => _handleConfirmDelete(id)} >Confirm </button>
						<button onClick = {_handleCancelDelete} >Cancel </button> 
					</div>
				</div>
			</div>
		</>
	);
};