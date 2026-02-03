const todoModel = require("../Model/model");

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await todoModel.getAllTodos();
    res.status(200).json({
      message: "[controller.js]: All Todos Fetched Successfully!",
      data: allTodos,
    });
  } catch (err) {
    console.error("[controller.js]: Error Fetching All Todos!", err.message);
    res.status(500).json({ error: "Server Error!" });
  }
};

const createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await todoModel.createTodo(description);
    res.status(200).json({
      message: "[controller.js]: Todo Created Successfully!",
      data: newTodo,
    });
  } catch (err) {
    console.error("[controller.js]: Error Creating New Todo!", err.message);
    res.status(500).json({ error: "Server Error!" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { todo_id } = req.params;
    const { description } = req.body;
    const updatedTodo = await todoModel.updateTodo(todo_id, description);
    res.status(200).json({
      message: "[controller.js]: Todo Update Successfully!",
      data: updatedTodo,
    });
  } catch (err) {
    console.error("[controller.js]: Error Updating Todo!", err.message);
    res.status(500).json({ error: "Server Error!" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { todo_id } = req.params;
    const deletedTodo = await todoModel.deleteTodo(todo_id);
    res.status(200).json({
      message: "[controller.js]: Todo Deleted Successfully!",
      data: deletedTodo,
    });
  } catch (err) {
    console.error("[controller.js]: Error Deleting Todo!", err.message);
    res.status(500).json({
      error: "[controller.js]: Server Error!",
    });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
