const supertest = require('supertest')
const server = require('../../server')

const port = 4000;

let api;

const {connectDB, disconnectDB} = require('../../database')

describe("api endpoints", () => {
    beforeAll(async ()=>{
        await connectDB();
    })
    beforeEach(async () => {
        api = server.listen(port);
      });
    afterEach(async () => {
        console.log("closing test server");
        await api.close();
      });
    afterAll(async () => {
        await disconnectDB();
      });

    describe("GET route endpoint", () => {
        test("should return statusCode 200", async () => {
            const res = await request(api).get("/");
            expect(res.statusCode).toBeTruthy();
        });
    })
})