import React, { useState } from "react";

function TodoNavBar({ onAdd }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(description);
    setDescription("");
  };

  const handleReset = (e) => {
    setDescription("");
  };

  return (
    <>
      <div className="fixed top-0 flex flex-row items-center justify-center w-screen gap-2 px-2 bg-red-200 border-b-2 h-14">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter task..."
          className="px-2 bg-white border rounded"
        />
        <section className="flex flex-row items-center justify-center gap-2">
          <button
            onClick={handleSubmit}
            className="px-2 border rounded shadow-[2px_2px_0px_0px] bg-white"
          >
            Add
          </button>
          <button
            onClick={handleReset}
            className="px-2 border rounded shadow-[2px_2px_0px_0px] bg-white"
          >
            Clear
          </button>
        </section>
      </div>
    </>
  );
}

export default TodoNavBar;
