// const {MongoClient} = require('mongodb');
// const { ObjectId } = require("mongodb");


// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(globalThis.__MONGO_URI__= "mongodb+srv://raaddatabase:TJ9rTxJmiae0pJ0V@cluster0.qf3tv.mongodb.net/?retryWrites=true&w=majority", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db(globalThis.__MONGO_DB_NAME__= "shelter");
//   });

//   afterAll(async () => {
//     await connection.close();
//   });

//   it('should insert a doc into collection', async () => {
//     const tasks = db.collection('tasks');

//     const mockTask = { habit: "anime", frequency: "6", week:0};
//     await tasks.insertOne(mockTask);

//     const insertedTask = await tasks.findOne({_id: ObjectId});
//     expect(insertedTask).toEqual(mockTask);
//   });
// });