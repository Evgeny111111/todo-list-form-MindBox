import { useState } from "react";
import { Todo } from "./types";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import React from "react";

type Filter = "all" | "active" | "completed";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
    setText("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app-container">
      <h1>ToDo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача..."
      />
      <button onClick={addTodo}>Добавить</button>

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>Все</button>
        <button onClick={() => setFilter("active")}>Активные</button>
        <button onClick={() => setFilter("completed")}>Завершённые</button>
      </div>

      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />

      <div className="footer">
        <span>Осталось: {remaining}</span>
        <button onClick={clearCompleted} style={{ marginLeft: 10 }}>
          Очистить завершённые
        </button>
      </div>
    </div>
  );
}

export default App;
