const pool = require("../database/toDoDatabase.js");

const getAllTodos = async () => {
  const result = await pool.query("SELECT * FROM todos");
  return result.rows;
};

const createTodo = async (description) => {
  const result = await pool.query(
    "INSERT INTO todos(description) VALUES($1) RETURNING *",
    [description]
  );
  return result.rows[0];
};

const updateTodo = async (description, todo_id) => {
  const result = await pool.query(
    "UPDATE todos SET description = $1 WHERE todo_id=$2 RETURNING *",
    [description, todo_id]
  );
  return result.rows[0];
};

const deleteTodo = async (todo_id) => {
  const result = await pool.query(
    "DELETE from todos WHERE todo = $1 RETURNING *"
  );
  return result.rows[0];
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
