const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const taskController = require('./controllers/tasks')
server.use('/tasks', taskController)

// Root route
server.get('/', (req, res) => res.send('Hello and Welcome to the server!'))

module.exports = server