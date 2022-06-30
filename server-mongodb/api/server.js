const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const controllers = require("./controllers");
server.use("/users", controllers.users);
server.use("/auth", controllers.auth);
server.use("/tasks", controllers.tasks)

// Root route
server.get("/", (req, res) => res.send("Hello and Welcome to the server!"));

module.exports = server;

