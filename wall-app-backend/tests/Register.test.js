const supertest = require('supertest')
const request = supertest
const app = require('../index')

describe("given a username and password",  ()=>{
    test("should respond with status code 200", async (done) =>{
        const res = await request(app).post("/register/test").send({
        username:"username",
        password:"password"
        })
        expect(res.statusCode).toBe(200)
        done()

    }) 
})  