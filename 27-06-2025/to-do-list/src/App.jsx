import { useReducer } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((todo) => todo !== action.payload);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleAddTodo = (text) => {
    if (text && text.trim() !== "") {
      dispatch({ type: "ADD", payload: text });
    } else {
      alert("Please enter a valid task.");
    }
  };

  const handleDeleteTodo = (textToDelete) => {
    dispatch({ type: "DELETE", payload: textToDelete });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <ul className="mt-4">
        {todos.length > 0 ? (
          todos.map((todo, i) => (
            <TodoItem key={i} text={todo} onDelete={handleDeleteTodo} />
          ))
        ) : (
          <p>No tasks yet...</p>
        )}
      </ul>
    </div>
  );
}

export default App;
