import React from "react";

function TodoItem({ todos, onUpdate, onDelete }) {
  return (
    <>
      <li className="flex items-center justify-between w-full gap-2 px-2">
        {todos.description}
        <section className="flex flex-row items-center justify-center gap-2">
          <button
            onClick={onUpdate}
            className="px-2 border rounded shadow-[2px_2px_0px_0px]"
          >
            Update
          </button>
          <button
            onClick={onDelete}
            className="px-2 border rounded shadow-[2px_2px_0px_0px]"
          >
            Delete
          </button>
        </section>
      </li>
    </>
  );
}

export default TodoItem;
