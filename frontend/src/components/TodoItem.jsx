import React from "react";

function TodoItem({ todos, onUpdate, onDelete }) {
  const handleUpdate = () => {
    const newDescription = prompt("Edit task:", todos.description);

    if (newDescription) {
      onUpdate(todos.todo_id, newDescription);
    }
  };
  return (
    <>
      <li className="flex items-center justify-between w-full gap-2 px-2 py-4 border-b border-black">
        {`- ${todos.description}`}
        <section className="flex flex-row items-center justify-center gap-2">
          <button
            onClick={handleUpdate}
            className="px-2 border rounded shadow-[2px_2px_0px_0px] bg-blue-400 "
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todos.todo_id)}
            className="px-2 border rounded shadow-[2px_2px_0px_0px] bg-red-400"
          >
            Delete
          </button>
        </section>
      </li>
    </>
  );
}

export default TodoItem;
