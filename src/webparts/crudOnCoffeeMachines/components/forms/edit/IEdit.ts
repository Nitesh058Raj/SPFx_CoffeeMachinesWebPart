import { IFullItem } from "../../../services/IService";

export interface IEditProps {
	id: number;
	onDisplay: () => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	service: any;
}

export const initItem: IFullItem = {
	Title: "",
	field_1: undefined,
	field_2: "",
	field_3: "",
	field_4: {
		Description: "",
		Url: ""
	},
	field_5: "",
	field_6: "",
	field_7: "",
	field_8: "",
	field_9: [""]
};