import TodoItem from "./TodoItem";

function todoList({ todos = [], onUpdate, onDelete }) {
  return (
    <>
      <div className="flex-col items-center justify-center w-screen h-screen pt-16">
        <ul className="w-full text-center">
          {todos.length === 0 ? (
            <h1>Tasks empty...</h1>
          ) : (
            todos.map((todos) => (
              <TodoItem
                key={todos.todo_id}
                todos={todos}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default todoList;
