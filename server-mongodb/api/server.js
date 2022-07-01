const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const controllers = require("./controllers");
app.use("/users", controllers.users);
app.use("/auth", controllers.auth);
app.use("/tasks", controllers.tasks)

// Root route
app.get("/", (req, res) => res.send("Hello and Welcome to the server!"));

module.exports = app;

