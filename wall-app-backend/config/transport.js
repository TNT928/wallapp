require('dotenv').config();
const nodemailer = require("nodemailer")

 const Transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'jenkins92886@gmail.com',
      pass: process.env.PASSWORD
    }
  })

  module.exports = Transport