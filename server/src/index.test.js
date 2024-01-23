const request = require('supertest');
const  { app } = require('./index');


// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

describe("Test example", () => {
    test("GET /toptracks", async () => {
        const res = await request(app).get("/toptracks")
        expect(res.status).toEqual(200)
             
    })
})