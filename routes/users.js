const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const User = require('../models/User');

router.get('/test', (req, res) => res.json({msg: 'Users Works'}));

router.post('/register', (req, res) => {
  User.findOne({email: req.body.email}).then(user => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

//router.get('/register', (req, res) => res.json({msg: 'Users Works'}));

module.exports = router;
