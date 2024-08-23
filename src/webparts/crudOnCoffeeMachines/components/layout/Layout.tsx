import * as React from "react";
import styles from "./Layout.module.scss";
import { Display } from "../display/Display";
import { Create, Edit } from "../forms";
import { CoffeeMachineService } from "../../services/CoffeeMachineService"
import { useAppContext } from "../../context/AppContext";

export const Layout: React.FC = () => {

	const [view, setView] = React.useState<"display" | "create" | "edit">("display");
	const [editItemID, setEditItemID] = React.useState(0);

	// Get the context from useAppContext
	const context = useAppContext();
	const service = CoffeeMachineService(context);

	const _handleCreate = () => {
		setView("create");
	}

	const _handleEdit = (Id: number) => {
		setEditItemID(Id);
		setView("edit");
	}

	const _handleDisplay = () => {
		setView("display");
	}

	return(
		<>
			<div className={styles.layoutConatiner}>
				{ view === "display" &&  <Display onCreate={_handleCreate} onEdit={_handleEdit} service={service} /> }
				{ view === "edit" && <Edit id={editItemID} onDisplay={_handleDisplay} service={service}  /> }
				{ view === "create" && <Create onDisplay={_handleDisplay} service={service} /> }
			</div>
		</>
		)
}
