const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");

//LOOK OVER LECTURE NOTES AND THE SCHEMA

module.exports = class User {
  constructor(data) {
    this.id = data.id;
    this.UserName = data.UserName;
    this.Password = data.Password;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const userData = await db.collection("users").find().toArray();
        console.log(userData);
        let users = userData.map((b) => new User(b));
        resolve(users);
      } catch (err) {
        reject("User not found");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let userData = await db
          .collection("users")
          .find({ _id: ObjectId(id) })
          .toArray();
        let user = new User({ ...userData[0], id: userData[0]._id });
        resolve(user);
      } catch (err) {
        reject("Task not found");
      }
    });
  }

  static create(UserName, Password) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let userData = await db
          .collection("users")
          .insertOne({ UserName, Password });
        let newUser = new User(userData.ops[0]);
        resolve(newUser);
      } catch (err) {
        reject("Error creating user");
      }
    });
  }

  //finished here and find the auth stuff
  update() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let updatedUserData = await db
          .collection("users")
          .findOneAndUpdate(
            { _id: ObjectId(this.id) },
            { $inc: { frequency: "2" } },
            { returnOriginal: false }
          );
        let updatedUser = new User(updatedUserData.value);
        resolve(updatedUser);
      } catch (err) {
        reject("Error updating user");
      }
    });
  }

  destroy() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        await db.collection("users").deleteOne({ _id: ObjectId(this.id) });
        resolve("User was deleted");
      } catch (err) {
        reject("User could not be deleted");
      }
    });
  }
};
