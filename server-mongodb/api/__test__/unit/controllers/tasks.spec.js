
const { tasks } = require('../../../controllers');
const tasksController = require('../../../controllers/tasks')
const Task = require('../../../models/Task');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('tasks controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('get all the tasks', () => {
        test('it returns all tasks with a 200 status code', async () => {
            jest.spyOn(Task, 'all', 'get')
                 .mockResolvedValue(['book1', 'book2']);
            await tasksController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['book1', 'book2']);
        })
    });

    describe('show', () => {
        test('it returns a book with a 200 status code', async () => {
            let testTask = {
                id: 1, title: 'Test Book', 
                yearOfPublication: 2021,
                abstract: 'testing', author_name: 'Bob', author_id: 1
            }
            jest.spyOn(Book, 'findById')
                .mockResolvedValue(new Book(testBook));
                
            const mockReq = { params: { id: 1 } }
            await tasksController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Task(testTask));
        })
    });

    describe('create', () => {
        test('it returns a new task with a 201 status code', async () => {
            let testTask = {
                id: 2, habit: 'Test Book', 
                frequency: 1,
                week: 1
            }
            jest.spyOn(tasks, 'create')
                .mockResolvedValue(new Task(testTask));
                
            const mockReq = { body: testTask }
            await tasksController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Task(testTask));
        })
    });

    describe('destroy', () => {
        test('it returns a 204 status code on successful deletion', async () => {
            jest.spyOn(Task.prototype, 'destroy')
                .mockResolvedValue('Deleted');
            
            const mockReq = { params: { id: 1 } }
            await tasksController.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    });
    
})
