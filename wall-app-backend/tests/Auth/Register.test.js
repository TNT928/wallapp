const supertest = require('supertest');
const app = require('../../index');
const request = require('jest')


describe('register/user' ,() =>{
  test("return status 200" ,()=>{
      const response = await request(register)
  })
})

