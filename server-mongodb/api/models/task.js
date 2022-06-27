const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

module.exports = class Task {
    constructor(data){
        this.id = data.id;
        this.habit = data.habit;
        this.frequency = data.frequency;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const taskData = await db.collection('tasks').find().toArray();
                // const taskData = await init();
                console.log(taskData)
                let tasks = taskData.map(b => new Task(b));
                resolve (tasks);
            } catch (err) {
                reject('Task not found');
            }
        });
    };

    // static findById (id) {
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             const db = await init();
    //             let dogData = await db.collection('dogs').find({ _id: ObjectId(id) }).toArray()
    //             let dog = new Dog({...dogData[0], id: dogData[0]._id});
    //             resolve (dog);
    //         } catch (err) {
    //             reject('Dog not found');
    //         }
    //     });
    // }

    // static create(name, age){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             const db = await init();
    //             let dogData = await db.collection('dogs').insertOne({ name, age })
    //             let newDog = new Dog(dogData.ops[0]);
    //             resolve (newDog);
    //         } catch (err) {
    //             reject('Error creating dog');
    //         }
    //     });
    // }

    // update() {
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             const db = await init();
    //             let updatedDogData = await db.collection('dogs').findOneAndUpdate({ _id: ObjectId(this.id) }, { $inc: { age: 1 } }, { returnOriginal: false })
    //             let updatedDog = new Dog(updatedDogData.value);
    //             resolve (updatedDog);
    //         } catch (err) {
    //             reject('Error updating dog');
    //         }
    //     });
    // }

    // destroy(){
    //     return new Promise(async(resolve, reject) => {
    //         try {
    //             const db = await init();
    //             await db.collection('dogs').deleteOne({ _id: ObjectId(this.id) })
    //             resolve('Dog was deleted')
    //         } catch (err) {
    //             reject('Dog could not be deleted')
    //         }
    //     })
    // }

}
