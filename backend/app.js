const todoRoutes = require("./Routes/routes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extend: true }));
app.use("/todos", todoRoutes);

module.exports = app;
