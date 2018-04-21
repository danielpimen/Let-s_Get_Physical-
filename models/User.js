const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const UserSchema = new Schema({
  name: {
    first: {type: String, required: true},
    last: {type: String, required: true},
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  myWorkOuts: [{type: Number, ref: 'User'}],
});

module.exports = User = mongoose.model('users', UserSchema);
