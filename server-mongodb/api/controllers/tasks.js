const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const Task = require("../models/task");

router.get("/", /*verifyToken,*/ async (req, res) => {
  try {
    const tasks = await Task.all;
    res.json({ tasks });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.get("/:id", /*verifyToken,*/ async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (err) {
    res.status(404).json({ err });
  }
});

router.post("/", /*verifyToken,*/ async (req, res) => {
  try {
    const task = await Task.create(
      req.body.habit,
      req.body.frequency,
      req.body.week
    );
    res.json(task);
  } catch (err) {
    res.status(404).json({ err });
  }
});

router.patch("/:id", /*verifyToken,*/ async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    const updatedTask = await task.update();
    res.json({ task: updatedTask });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.delete("/:id", /*verifyToken,*/ async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    await task.destroy();
    res.status(204).json("Task deleted");
  } catch (err) {
    res.status(500).json({ err });
  }
});

// function verifyToken(req,res,next) {
//   const token = req.headers['authorization'];
//   if(token) {
//       jwt.verify(token, process.env.SECRET, async (err, data) => {
//           console.log(data)
//           if(err) {
//               res.status(403).json({err: 'Invalid token'}) 
//           } else {
//               next();
//           }
//       })
//   } else {
//      res.status(403).json({err: 'Missing token'}) 
//   }
// }

module.exports = router;
