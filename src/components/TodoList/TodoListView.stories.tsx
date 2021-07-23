import React from "react";
import { TodoStore } from "stores/TodoStore";
import { MockTodosApi } from "test/mocks/MockTodosApi";
import { TodoListView } from "./TodoListView";

export default {
	title: "Components/Todos",
};

export const TodoList = () => {
	const api = new MockTodosApi();
	const store = new TodoStore(api);

	return <TodoListView store={store} />;
};
