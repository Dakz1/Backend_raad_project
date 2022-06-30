/*
const server = require('../server');
const request = require('supertest');

// describe('GET/',  () => {
//     it('return status code 201 if all tasks are passed', async () => {
//        const response = await request(server).get("/tasks").
        
//     })
// });

describe("GET /", () => {
    test("200: Responds with an array of messages", () => {
      return request(app)
        .get("/")
        .expect(200)
        .then((res) => {
          expect(res.body).toBeInstanceOf(Array);
          res.body.forEach((message) => {
            id: expect.any(string);
            time: expect.any(string);
            text: expect.any(String);
          });
        });
    });
});


describe("POST /", () => {

    describe("username and password are given", () => {
        test("should respong with a 200 status code", async () =>{
            const response = await request(server).post("/tasks").send({
                username: "username",
                password: "password"
            });
            expect(response.statusCode).toEqual(200);
        })

        test("should specify json in the content type header", async () => {
            const response = await request(server).post("/tasks").send({ 
                username: "username", 
                password: "password" 
              })
              expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        })
        
        test("response has userId", async () => {
            const response = await request(server).post("/tasks").send({ 
                username: "username", 
                password: "password" 
            })
            expect(response.body.userId).toBeDefined(); //checking if userId comes back
        })


    })

    describe("Missing username and password", () => {
        test("should respond with a 400 status code", async () => {

            const dataBody = [
                {username:"username"},
                {password:"password"},
                {}
            ]
            for (const body of dataBody) {
                const response = await request(server).post("/tasks").send(body)
                expect(response.statusCode).toBe(400);
            }
            
        })
    })

})
*/
    