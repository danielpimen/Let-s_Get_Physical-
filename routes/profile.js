const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateProfileInput = require('../validation/profile');

const Profile = require('../models/Profile');
const User = require('../models/User');

router.get('/test', (req, res) => {
  res.json({msg: 'It Works'});
});
//Get api/profile
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  const errors = {};
  Profile.findOne({user: req.user.id})
    .populate('users', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'No Profile Found';
        return res.errors(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

router.get('/all', (req, res) => {
  const errors = {};
  Profile.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles doge';
        return res.status(404).json(errors);
      }
      res.json(profiles);
    })
    .catch(err => res.status(404).json(err));
});

//Get profile/handle/:handle
//Get Profile by handle/name
router.get('/handle/:handle', (req, res) => {
  const errors = {};
  Profile.findOne({handle: req.params.handle})
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'No Profile Exists';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

//Create or Edit User Profile
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  const {errors, isValid} = validateProfileInput(req.body);
  //Check if valid
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //Get Fields
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.location) profileFields.location = req.body.location;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (typeof req.body.hobbies !== 'undefined') {
    profileFields.hobbies = req.body.hobbies.split(', ');
  }
  if (typeof req.body.sports !== 'undefined') {
    profileFields.sports = req.body.hobbies.split(', ');
  }
  Profile.findOne({user: req.user.id}).then(profile => {
    if (profile) {
      //Update Profile
      Profile.findOneAndUpdate(
        {user: req.user.id},
        {$set: profileFields},
        {new: true}
      ).then(profile => res.json(profile));
    }
    //Create Profile
    else
      Profile.findOne({handle: profileFields.handle}).then(profile => {
        if (profile) {
          errors.handle = 'That handle already in use';
          res.status(400).json(errors);
        }
        //Save Profile
        new Profile(profileFields).save().then(profile => {
          res.json(profile);
        });
      });
  });
});
module.exports = router;
