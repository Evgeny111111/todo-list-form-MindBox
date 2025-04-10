import { Todo } from "../types";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
};

const TodoList = ({ todos, toggleTodo }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
