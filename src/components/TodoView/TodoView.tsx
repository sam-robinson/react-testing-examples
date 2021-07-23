import React from "react";
import { observer } from "mobx-react";
import { ListGroupItem } from "reactstrap";
import { TodoModel } from "models/TodoModel";

interface ITodoProps {
	model: TodoModel;
}

const TodoComponent = ({ model }: ITodoProps) => (
	<ListGroupItem className="m-0">{model.text}</ListGroupItem>
);

export const TodoView = observer(TodoComponent);
