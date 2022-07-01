const supertest = require('supertest');
const app = require('../../server');
const appli = require('../../index');
const request = supertest(app);

// const port = 4000;



const {connectDB, disconnectDB} = require('../../database')

describe("api endpoints", () => {
  // let api;
    beforeAll(async ()=>{
        await connectDB();
    })
    // beforeEach(async () => {
    //     api = app.listen(5000, () => 
    //       console.log("listening to port 5000")
    //     );
    // });
    // afterEach(async () => {
    //     console.log("closing test server");
    //     await api.close(done);
    // });
    afterAll(async () => {
      await disconnectDB();
      
      await appli.close();
    });

    describe("GET route endpoint", () => {
        test("should return statusCode 200", async () => {
            const res = await request.get("/");
            expect(res.statusCode).toBeTruthy();
        });
        
    })
})