import * as React from "react";
import styles from "./Edit.module.scss";
import { IEditProps, initItem } from "./IEdit";
import { IFullItem } from "../../../services/IService";

export const Edit: React.FC<IEditProps> = ({ id, onDisplay, service }) => {

	const [item, setItem ] = React.useState<IFullItem>(initItem);

	React.useEffect( () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const fetchItem = async (): Promise<any> => {
			const data = await service.getMachine(id);
			setItem(data);
		};

		// eslint-disable-next-line  @typescript-eslint/no-floating-promises
		fetchItem();
	}, []);


	const _handleUpdate = async (): Promise<void> => {

		const title = document.getElementById("Title") as HTMLInputElement;
		const product_Summary = document.getElementById("Product_Summary") as HTMLInputElement;
		const price = document.getElementById("Price") as HTMLInputElement;
		const status = document.getElementById("Status") as HTMLInputElement;
		const week_Avg_Cups = document.getElementById("Week_Avg_Cups") as HTMLInputElement;
		const product_Type = document.getElementById("Product_Type") as HTMLInputElement;
		const primary_Color = document.getElementById("Primary_Color") as HTMLInputElement;
		const special_Feature = document.getElementById("Special_Feature") as HTMLInputElement;
		const week_Avg_Espressos = document.getElementById("Week_Avg_Espressos") as HTMLInputElement;

		const updatedItem = {
			Title: title.value,
			field_5: product_Summary.value,
			field_1: +price.value,
			field_9: [status.value],
			field_7: week_Avg_Cups.value,
			field_2: product_Type.value,
			field_3: primary_Color.value,
			field_6: special_Feature.value,
			field_8: week_Avg_Espressos.value,
		};

		await service.updateMachine(id, updatedItem);

		onDisplay();
	}

	return(
		<>
			<div className={styles.editContainer}>
				<h3>Coffee Machine Details: </h3>
				<div>
					<div className={styles.inputGroup}>
						<p>Name: <input type="text" defaultValue={item.Title} id="Title" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Product Summary: <input type="text" defaultValue={item.field_5} id="Product_Summary" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Price: <input type="text" defaultValue={item.field_1} id="Price" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Status: <input type="text" defaultValue={item.field_9} id="Status" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Week Average Cups: <input type="text" defaultValue={item.field_7} id="Week_Avg_Cups" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Product Type: <input type="text" defaultValue={item.field_2} id="Product_Type" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Primary Color: <input type="text" defaultValue={item.field_3} id="Primary_Color" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Special Feature: <input type="text" defaultValue={item.field_6} id="Special_Feature" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Week Average Espressos: <input type="text" value={item.field_8} id="Week_Avg_Espressos" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Image URL: <input type="text" defaultValue={item.field_4?.Url} id="Image_URL" /></p>
					</div>
					<img src={item.field_4?.Url} alt="Coffee Machine" />
					<button onClick={_handleUpdate}>Update</button>
				</div>
			</div>
		</>
		)
}
