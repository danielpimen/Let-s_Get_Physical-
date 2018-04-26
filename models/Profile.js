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
  },
  hobbies: {
    type: [String],
  },
  sports: {
    type: [String],
  },
  myWorkOuts: {type: [String]},
});
