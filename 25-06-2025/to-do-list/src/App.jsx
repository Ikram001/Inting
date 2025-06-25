import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    if (text && text.trim() !== "") {
      setTodos([...todos, text]);
    } else {
      alert("Please enter a valid task.");
    }
  };

  const handleDeleteTodo = (textToDelete) => {
    const filteredTodos = todos.filter((todo) => todo !== textToDelete);
    setTodos(filteredTodos);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <ul className="mt-4">
  {todos.length > 0 ? (
    (() => {
      const items = [];
      for (let i = 0; i < todos.length; i++) {
        items.push(
          <TodoItem text={todos[i]} onDelete={handleDeleteTodo} />
        );
      }
      return items;
    })()
  ) : (
    <p>No tasks yet...</p>
  )}
</ul>

    </div>
  );
}

export default App;
