import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

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
      setTodos((prev) => [...prev, res.data.data]);
    } catch (err) {
      console.error("[frontend]: Error creating new todo!", err.message);
    }
  };

  const updateTodo = async (todo_id, description) => {
    try {
      const res = await axios.put(`http://localhost:5000/todos/${todo_id}`, {
        description,
      });
      setTodos((prev) =>
        prev.map((todo) => (todo.todo_id === todo_id ? res.data.data : todo)),
      );
    } catch (err) {
      console.error("[frontend]: Error creating new todo!", err.message);
    }
  };

  const deleteTodo = async (todo_id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/todos/${todo_id}`);
      setTodos((prev) => prev.filter((todo) => todo.todo_id !== todo_id));
    } catch (err) {
      console.error("[frontend]: Error deleting todo!", err.message);
    }
  };

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
