const router = require("../backend/Routes/routes.js");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/warmuptodos", router);

module.exports = app;
