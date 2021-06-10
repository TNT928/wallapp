require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/verified/:token', (req, res) => {
  const {token} = req.params;

  try {
    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
      if (err) console.log(err);
      const id = decoded.id;

      db.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
        if (err) console.log(err);
        const user = result[0];
        const id = user.id;
        if (user) {
          db.query(
            'UPDATE users SET hasConfirmed = 1 WHERE id = (?)',
            id,
            (err, result) => {
              if (result) res.json({message: 'User confirmed'});
            }
          );
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
