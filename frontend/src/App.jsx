import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import TodoNavBar from "./components/TodoNavBar";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/todos`);
      setTodos(res.data.data);
    } catch (err) {
      console.error("[frontend]: Error fetching todos! ", err.message);
    }
  };

  const createTodo = async (description) => {
    try {
      const res = await axios.post(`http://localhost:5000/todos`, {
        description,
      });
      setTodos([...todos, res.data.data]);
    } catch (err) {
      console.error("[frontend]: Error creating new todo!", err.message);
    }
  };

  const updateTodo = async (todo_id, description) => {
    try {
      const res = await axios.put(`http://localhost:5000/todos/${todo_id}`, {
        description,
      });
      setTodos(
        todos.map((todos) =>
          todos.todo_id === todo_id ? res.data.data : todos,
        ),
      );
    } catch (err) {
      console.error("[frontend]: Error creating new todo!", err.message);
    }
  };

  const deleteTodo = async (todo_id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${todo_id}`);
      setTodos(todos.filter((todos) => todos.todo_id !== todo_id));
    } catch (err) {
      console.error("[frontend]: Error deleting todo!", err.message);
    }
  };

  return (
    <>
      <TodoNavBar onAdd={createTodo} />
      <div>
        <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      </div>
    </>
  );
}

export default App;
