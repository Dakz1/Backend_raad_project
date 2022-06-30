const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const tasks = db.collection('tasks');

    const mockTask = {_id: ObejctId, name: 'John', email: 'johnny@gmail.com', habit: "dance", frequency: "every hour", week:22};
    await tasks.insertOne(mockTask);

    const insertedTask = await tasks.findOne({_id: 'some-user-id'});
    expect(insertedTask).toEqual(mockTask);
  });
});