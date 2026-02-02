const pool = require("../Database/database");

const getAllTodos = async () => {
  const result = await pool.query("SELECT * FROM todos");
  return result.rows;
};

const createTodo = async (description) => {
  const result = await pool.query(
    "INSERT INTO todos(description) VALUES ($1) RETURNING *",
    [description]
  );
  return result.rows[0];
};

const updateTodo = async (todo_id, description) => {
  const result = await pool.query(
    "UPDATE todos SET description = $2 WHERE todo_id = $1 RETURNING *",
    [todo_id, description]
  );
  return result.rows[0];
};

const deleteTodo = async (todo_id) => {
  const result = await pool.query(
    "DELETE FROM todos WHERE todo_id = $1 RETURNING *",
    [todo_id]
  );
  return result.rows[0];
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
