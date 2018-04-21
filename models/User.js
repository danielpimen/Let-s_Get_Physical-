const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  myWorkOuts: [{type: Number}],
});

module.exports = User = mongoose.model('users', UserSchema);
