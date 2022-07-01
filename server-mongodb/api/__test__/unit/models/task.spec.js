
const Task = require('../../../models/Task');

const mongodb = require('mongodb');
jest.mock('mongodb');

const db = require('../../../dbConfig');

describe('Task', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all',  () => {
        test('it resolves with tasks on successful db query', async () => {
            jest.spyOn(db, 'collection')
                .mockResolvedValueOnce({ tasks: [{}, {}, {}]});
            const all = await Task.all();
            expect(all).toHaveLength(3)
        })
    });

    describe('findById', () => {
        test('it resolves with book on successful db collection', async () => {
            let taskData = { habit:"", frequency:"", week: 1 }
            jest.spyOn(db, 'collection')
                .mockResolvedValueOnce({task:[taskData] });
            const result = await Task.findById(mongodb.ObjectId);
            expect(result).toBeInstanceOf(Task)
        })
    });

    describe('create', () => {
        test('it resolves with book on successful db collection', async () => {
            let taskData = { habit: 'Test Book', frequency: 2020, week: 0}
            jest.spyOn(db.init, 'collection')
                .mockResolvedValueOnce({task: [ { ...taskData, _id:mongodb.ObjectId}] });
            const result = await Task.create(taskData);
            expect(result).toHaveProperty('_id:ObjectId')
        })
    });
    
})
