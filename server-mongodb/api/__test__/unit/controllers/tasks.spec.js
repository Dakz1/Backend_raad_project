
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
                 .mockResolvedValue({habit:"1", frequency: "3", week:2});
            await tasksController.get(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith({habit:"1", frequency: "3", week:2});
        })
    });

    describe('show', () => {
        test('it returns a task with a 200 status code', async () => {
            let testTask = {
                habit: 'Test Book', 
                frequency: 2021,
                week:2
            }
            jest.spyOn(Task, 'findById')
                .mockResolvedValue(new Task(testTask));
                
            const mockReq = { params: { _id:ObjectId } }
            await tasksController.get(mockReq, mockRes);
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
            await tasksController.post(mockReq, mockRes);
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
