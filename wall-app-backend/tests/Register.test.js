const supertest = require('supertest')
const request = supertest
const app = require('../index')

// describe("given a username and password",  ()=>{
//     let data = { 
//         "username" : 'username',
//         "email" : 'email',
//         "password": 'password',
//         "hasConfirmed" : 'false'
       
//     }
//     it("should respond with status code 200", (done) =>{
//         request(app).post("/register").send(data).set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(204)
//         .end(err =>{
//             if(err) return done(err)
//             done()
//         })
       
//     }) 
// })  

// describe("test shoould reply 200" ,() =>{
//     it("respond wiht status code 200", (done)=>{
// request(app).get('/register/test').expect(400, done)
//     })
// })

describe('GET register/users', function () {
    it('respond with json containing a list of all users', function (done) {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
          
            .expect(200, done);
    });
});