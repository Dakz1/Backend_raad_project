/*
const Task = require('../../../models/Task');

const mongodb = require('mongodb');
jest.mock('mongodb');

const db = require('../../../dbConfig');

describe('Book', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all',  () => {
        test('it resolves with authors on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}]});
            const all = await Task.all;
            expect(all).toHaveLength(3)
        })
    });

    describe('findById', () => {
        test('it resolves with book on successful db query', async () => {
            let taskData = { id: 1, title: 'Test Book' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ taskData] });
            const result = await Task.findById(1);
            expect(result).toBeInstanceOf(Task)
        })
    });

    describe('create', () => {
        test('it resolves with book on successful db query', async () => {
            let taskData = { habit: 'Test Book', frequency: 2020, week: [0,0,0,0,0,0,0]}
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...taskData, id: 1 }] });
            jest.spyOn(Author, 'findOrCreateByName')
                .mockResolvedValueOnce(new Author({id: 1, name: 'Test Author'}));
            const result = await Task.create(taskData);
            expect(result).toHaveProperty('id')
        })
    });
    
})
*/