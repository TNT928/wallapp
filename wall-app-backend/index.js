require('dotenv').config();
const express = require("express")
const cors = require('cors')
const app = express()

app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit: '50mb',extended:true}))
app.use(cors())


const register = require('./Auth/Register')
const login = require('./Auth/Login')
const posts = require('./Routes/Post')
const verifyEmail = require('./Auth/VerifyEmail')

app.use('/register', register)
app.use('/', login)
app.use('/', posts)
app.use('/', verifyEmail)

const PORT = process.env.PORT || 4000

app.listen(PORT,(res, req) =>{
    console.log("Server Running")
})

module.exports = app;