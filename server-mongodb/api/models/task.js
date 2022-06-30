const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");

module.exports = class Task {
  constructor(data) {
    this.id = data.id;
    this.habit = data.habit;
    this.frequency = data.frequency;
    this.week = data.week;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const taskData = await db.collection("tasks").find().toArray();
        // const taskData = await init();
        console.log(taskData);
        let tasks = taskData.map((b) => new Task(b));
        resolve(tasks);
      } catch (err) {
        reject("Task not found");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let taskData = await db
          .collection("tasks")
          .find({ _id: ObjectId(id) })
          .toArray();
        console.log(taskData);
        let task = new Task({ ...taskData[0], id: taskData[0]._id });
        resolve(task);
      } catch (err) {
        reject("Task not found");
      }
    });
  }

  static create(habit, frequency, week) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let taskData = await db
          .collection("tasks")
          .insertOne({ habit, frequency, week });
        let newTask = new Task(taskData.ops[0]);
        resolve(newTask);
      } catch (err) {
        reject("Error creating task");
      }
    });
  }

  //THIS NEEDS TO BE LOOKED AT TOMORROW IN TERMS OF INC
  update() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let updatedTaskData = await db
          .collection("tasks")
          .findOneAndUpdate(
            console.log(habit),
            { _id: ObjectId(this.id)},
            { $inc: { week: 1 } },
            { returnOriginal: false }
          );
        let updatedTask = new Task(updatedTaskData.value);
        resolve(updatedTask);
      } catch (err) {
        reject("Error updating task");
      }
    });
  }

  destroy() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        await db.collection("tasks").deleteOne({ _id: ObjectId(this.id) });
        resolve("Task was deleted");
      } catch (err) {
        reject("Task could not be deleted");
      }
    });
  }
};
