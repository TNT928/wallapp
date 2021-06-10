require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Transport = require('../config/transport');

router.get('/register/users', function (req, res, next) {
  return res.json('all users sent');
});

router.post('/register', async (req, res) => {
  const username = req.body.username;
  const password = await bcrypt.hashSync(req.body.password, 10);
  const email = req.body.email;
  const hasConfirmed = false;

  try {
    db.query(
      'SELECT * FROM Users WHERE username = (?)',
      username,
      (err, results) => {
        if (results.length > 0)
          return res.status(400).json({msg: 'User already exists!'});
        else {
          db.query(
            'INSERT INTO users (username,email,password,hasConfirmed) VALUES(?,?,?,?)',
            [username, email, password, hasConfirmed]
          );
          db.query(
            'SELECT * FROM users WHERE username = ?',
            username,
            (err, result) => {
              if (err) throw err;

              const id = result[0].id;
              const email = result[0].email;
              const emailToken = jwt.sign({id}, process.env.JWTSECRET, {
                expiresIn: 36000,
              });
              const url = `http://localhost:3000/verify/${emailToken}`;
              // send mail with defined transport object
              let info = Transport.sendMail({
                from: '"Michael', // sender address
                to: email, // list of receivers
                subject: 'Verification', // Subject line
                html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`, // html body
              });
            }
          );

          console.log('user added');
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
