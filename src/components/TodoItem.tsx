import React from "react";
import { Todo } from "../types";

type Props = {
  todo: Todo;
  toggleTodo: (id: string) => void;
};

const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoItem;
