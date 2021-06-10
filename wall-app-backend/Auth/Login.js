require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    db.query(
      'SELECT * FROM Users WHERE username = ?',
      username,
      (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
          const user = results[0];4

          let match = bcrypt.compareSync(password, user.password);
          let unverified = user.hasConfirmed == 0
          if (!match) {
            res.status(401).json({message: 'Wrong password'});
          }

          const id = user.id;
          if (unverified) {
            return res
              .status(401)
              .json({message: "You haven't verified your email"});
          }

          jwt.sign(
            {id},
            process.env.JWTSECRET,
            {expiresIn: 3600},
            (err, token) => {
              if (err) throw err;
              res.json({
                message: 'You are logged in',
                auth: true,
                token: token,
                username: user.username,
                hasConfirmed: user.hasConfirmed,
                id,
              });
            }
          );
        } else {
          res.json({message: 'No user Found', auth: false});
        }
      }
    );
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
