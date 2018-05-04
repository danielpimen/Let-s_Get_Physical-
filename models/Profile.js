const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  handle: {
    type: String,
    required: true,
    max: 50,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
    required: true,
  },
  hobbies: {
    type: [String],
  },
  sports: {
    type: [String],
  },
  myWorkOuts: {type: [String]},
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
