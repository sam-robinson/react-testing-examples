import { action, computed, IObservableArray, observable } from "mobx";
import { IServiceResponse, ITodoDto, ITodosApi } from "api";
import { TodoModel } from "models/TodoModel";

export class TodoStore {
	constructor(api: ITodosApi) {
		this.api = api;
	}

	api: ITodosApi;
	@observable.ref todos: IObservableArray<TodoModel> | null = null;

	@computed get todosLoaded() {
		return this.todos !== null;
	}

	@action.bound async loadTodos() {
		this.todos = null;
		const response = await this.api.getTodos();
		this.processLoadTodos(response);
	}

	@action.bound private processLoadTodos(response: IServiceResponse<ITodoDto[]>) {
		this.todos = observable.array(
			response.result.map((dto) => new TodoModel(dto.text, dto.completed))
		);
	}
}
