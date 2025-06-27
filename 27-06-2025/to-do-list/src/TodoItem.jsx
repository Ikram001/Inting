function TodoItem({ text, onDelete }) {
  return (
    <li className="flex justify-between items-center border-b py-2">
      <span>{text}</span>
      <button onClick={() => onDelete(text)} className="delete">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
