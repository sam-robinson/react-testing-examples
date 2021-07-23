import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { ListGroup } from "reactstrap";
import { TodoStore } from "stores/TodoStore";
import { TodoView } from "components/TodoView";

interface ITodoListProps {
	store: TodoStore;
}

const TodoListComponent = ({ store }: ITodoListProps) => {
	useEffect(() => {
		if (!store.todosLoaded) {
			store.loadTodos();
		}
	}, [store, store.todosLoaded]);

	if (!store.todosLoaded || !store.todos) {
		return <div>Loading...</div>;
	}

	return (
		<ListGroup style={{ maxWidth: 500 }}>
			{store.todos.map((todo) => (
				<TodoView model={todo} />
			))}
		</ListGroup>
	);
};

export const TodoListView = observer(TodoListComponent);
