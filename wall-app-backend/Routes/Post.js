const express = require('express');
const db = require('../config/db');
const router = express.Router();
require('dotenv').config();

router.post('/post', (req, res) =>{
    const {body, author} = req.body
    console.log(author)
    console.log(body, author)
    db.query("INSERT INTO Posts (body, author) VALUES (?,?)", [body, author], (err, result) =>{
        if(err){console.log(err)}
        res.send(result)
        console.log(result) 
    })
})


router.get('/posts', (req, res)=>{
    db.query("SELECT * FROM Posts" , (err, result)=>{
        if(err) console.log(err)
        res.send(result)
        })
        
})



module.exports = router;