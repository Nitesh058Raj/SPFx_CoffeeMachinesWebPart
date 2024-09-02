import * as React from "react";
import styles from "./List.module.scss";
import { IListProps } from "./IList";

export const List: React.FC<IListProps> = ({ items, onEdit, _handleDelete }) => {
	return(
		<>	
			<div className={styles.listContainer}>
				<table className={styles.listTable}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Price</th>
							<th>Type</th>
							<th>Color</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item) => (
							<tr key={item.ID}>
								<td>{item.ID}</td>
								<td>{item.Title}</td>
								<td>{item.field_1}</td>
								<td>{item.field_2}</td>
								<td>{item.field_3}</td>
								<td>{item.field_9}</td>
								<td>
									<img src={require<string>('../../../assets/edit-icon-2.svg')}  alt="Edit" onClick={() => onEdit(item.ID)} />
									<img src={require<string>('../../../assets/delete-icon.svg')} alt="Delete" onClick={() => _handleDelete(item.ID)} style={{ padding: '0px 0px 3px 0px' }}/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}