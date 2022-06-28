const express = require("express");
const router = express.Router();

const Task = require("../models/task");

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.all;
    res.json({ tasks });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (err) {
    res.status(404).json({ err });
  }
});

router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body.habit, req.body.frequency);
    res.json(task);
  } catch (err) {
    res.status(404).json({ err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    const updatedTask = await task.update();
    res.json({ task: updatedTask });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    await task.destroy();
    res.status(204).json("Task deleted");
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
