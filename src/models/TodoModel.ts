import { observable } from "mobx";

export class TodoModel {
	constructor(text: string, completed: boolean = false) {
		this.text = text;
		this.completed = completed;
	}

	@observable text: string = "";
	@observable completed: boolean = false;
}
