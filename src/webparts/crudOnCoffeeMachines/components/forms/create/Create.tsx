import * as React from "react";
import styles from "./Create.module.scss";
import { ICreateProps } from "./ICreate";

export const Create: React.FC<ICreateProps> = ({ onDisplay, service }) => {

	const _handleCreateItem = async (): Promise<void> => {
		// Getting all values from the form 
		const title = document.getElementById("Title") as HTMLInputElement;
		const product_Summary = document.getElementById("Product_Summary") as HTMLInputElement;
		const price = document.getElementById("Price") as HTMLInputElement;
		const status = document.getElementById("Status") as HTMLInputElement;
		const week_Avg_Cups = document.getElementById("Week_Avg_Cups") as HTMLInputElement;
		const product_Type = document.getElementById("Product_Type") as HTMLInputElement;
		const primary_Color = document.getElementById("Primary_Color") as HTMLInputElement;
		const special_Feature = document.getElementById("Special_Feature") as HTMLInputElement;
		const week_Avg_Espressos = document.getElementById("Week_Avg_Espressos") as HTMLInputElement;

		if(title.value === '' || title.value === null) {
			alert("Please provide a Name.");
			return;
		}

		const item = {
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

		await service.createMachine(item);

		onDisplay();
	}

	return(
		<>
			<div className={styles.createConatiner}>
				<h3> Add a Coffee Machine: </h3>
				<div>
					<div className={styles.inputGroup}>
						<p>Name: <input type="text" id="Title" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Product Summary: <input type="text"  id="Product_Summary" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Price: <input type="text" id="Price" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Status: <input type="text" id="Status" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Week Average Cups: <input type="text" id="Week_Avg_Cups" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Product Type: <input type="text" id="Product_Type" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Primary Color: <input type="text" id="Primary_Color" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Special Feature: <input type="text" id="Special_Feature" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Week Average Espressos: <input type="text" id="Week_Avg_Espressos" /></p>
					</div>
					<div className={styles.inputGroup}>
						<p>Image URL: <input type="text" id="Image_URL" /></p>
					</div>
					<button onClick={_handleCreateItem}>Create</button>
				</div>
			</div>
		</>
		)
}
