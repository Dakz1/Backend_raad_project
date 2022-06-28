const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const taskController = require("./controllers/tasks");
server.use("/tasks", taskController);

const controllers = require("./controllers");
server.use("/users", controllers.users);
server.use("/auth", controllers.auth);

// Root route
server.get("/", (req, res) => res.send("Hello and Welcome to the server!"));

module.exports = server;

//put the post and patch requests not id, create a route for postbyid patchid, deletebyid,
