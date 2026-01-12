const todoModel = require("../Model/model");

const getAllTodos = async (req, res) => {
  try {
    const todos = await todoModel.getAllTodos();
    res.status(200).json({
      message: "[Controller.js]: Fetching all todos successful!",
      data: todos,
    });
  } catch (err) {
    console.error("[Controller.js]: Error fetching all todos!", err.message);
    res.status(500).json({ error: "Server error!" });
  }
};

const createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await todoModel.createTodo(description);
    res.status(200).json({
      message: "[Controller.js]: Creating new todo succcesful!",
      data: newTodo,
    });
  } catch (err) {
    console.error("[Controller.js]: Error adding new todo!", err.message);
    res.status(500).json({ error: "Server error!" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { todo_id } = req.params;
    const { description } = req.body;
    const updatedTodo = await todoModel.updateTodo(description, todo_id);

    if (!todo_id && !description) {
      res.status(400).json({ message: "[Controller.js]: To do not found..." });
    }

    res.status(200).json({
      message: "[Controller.js]: Updating todo successful!",
      data: updatedTodo,
    });
  } catch (err) {
    console.error("[Controller.js]: Error updating to do!", err.message);
    res.status(500).json({ error: "Server error!" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { todo_id } = req.params;
    await todoModel.deleteTodo(todo_id);
    return res
      .status(200)
      .json({ message: "[Controller.js]: Deleting to do successful!" });
  } catch (err) {
    console.error("[Controller.js]: Error deleting to do!", err.message);
    res.status(500).json({ error: "Server error!" });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
