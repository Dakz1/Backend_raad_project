const { request } = require("supertest");
const { router } = require("../../controllers/tasks");


describe('task endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    })
        test('should return all tasks', async () => {
            const res = await request(api)
            .get('/tasks')
            expect(res.statusCode).toEqual(200)
            expect(res.json).toEqual({tasks})
        })

    it('should return a list of tasks in database', async () => {
        const res = await request(router).get('/tasks');
        expect(res.statusCode).toEqual(200);
    })

    test('should return a status of 200', (done) => {
        request(api).get('/').expect(200, done);
      });
    
      test('should return a status of 200', (done) => {
        request(api).get('/tasks').expect(200, done);
      });


    it('should post a task in database', async () => {
        const res = await request(api).post('/tasks');
        expect(res.statusCode).toEqual(200);
        
        expect(res.body.length).toEqual(4);
    })

    it('should delete a task in database', async () => {
        const res = await request(api).delete('/tasks');
        expect(res.statusCode).toEqual(200);
        
        expect(res.body.length).toEqual(3);
    })

    
})

describe('get all the tasks', () => {
    test('it returns all tasks with a 200 status code', async () => {
        jest.spyOn(Task.all)
             .mockResolvedValue({habit: "1", frequency: 2, week:0});
        await tasksController.get(null, mockRes);
        expect(mockStatus).toHaveBeenCalledWith(200);
        expect(mockJson).toHaveBeenCalledWith({habit: "1", frequency: 2, week:0});
    })})


