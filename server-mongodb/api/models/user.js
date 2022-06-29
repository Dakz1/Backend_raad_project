const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");

//LOOK OVER LECTURE NOTES AND THE SCHEMA

module.exports = class User {
  constructor(data) {
    this.id = data.id;
    this.userName = data.userName;
    this.name = data.name;
    this.password = data.password;
    this.email = data.email;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const userData = await db.collection("users").find().toArray();
        console.log(userData);
        //let users = userData.map((b) => new User(b));
        resolve(userData);
      } catch (err) {
        reject("User not found");
      }
    });
  }

  static findByEmail(email) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let userData = await db
          .collection("users")
          .find({"email" : email })
          .toArray();
        let user = new User({ ...userData[0], email: userData[0].email });
        resolve(user);
      } catch (err) {
        reject("User not found");
      }
    });
  }
  /*

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let userData = await db
          .collection("users")
          .find({ _id: ObjectId(id) })
          .toArray();
        console.log(userData);
        let user = new User({ ...userData[0], id: userData[0]._id });
        resolve(user);
      } catch (err) {
        reject("User not found");
      }
    });
  }
  */

  static create(userName) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let userData = await db
          .collection("users")
          .insertOne(userName);
        //let newUser = new User(userData.ops[0]);
        resolve(userData);
      } catch (err) {
        reject("Error creating user");
      }
    });
  }
/*
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
  */
};
