const todoController = require("../Controller/controller");
const express = require("express");
const router = express.Router();

router.get("/", todoController.getAllTodos);
router.post("/", todoController.createTodo);
router.put("/:todo_id", todoController.updateTodo);
router.delete("/:todo_id", todoController.deleteTodo);

module.exports = router;
