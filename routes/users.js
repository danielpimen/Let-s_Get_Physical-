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

router.post('/login', (req, res) => {
  const {errors, isValid} = validateLoginInput(req.body);
  //Check for Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.param.email;
  const password = req.param.password;

  User.findOne({email}).then(user => {
    //Check user
    if (!user) {
      errors.email = 'User Not Found';
      return res.status(404).json(errors);
    }
    //Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User Match
        //What is included in JWT
        const payload = {id: user.id, name: user.name, avatar: user.avatar};

        //Token
        jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token,
          });
        });
      } else {
        errors.password = 'Wrong Password';
        return res.status(400).json(errors);
      }
    });
  });
});

router.get(
  '/current',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
