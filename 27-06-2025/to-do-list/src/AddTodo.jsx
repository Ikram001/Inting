import { useState } from "react";

function AddTodo(props) {
  const [input, setInput] = useState("");

  const handleSubmit = function (event) {
    event.preventDefault();

    if (input !== "") {
      props.onAdd(input);
      setInput("");
    } else {
      alert("Please enter something in the input.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="border p-2 flex-1"
        placeholder="Enter task"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit" className="add">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
