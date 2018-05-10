const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const WorkOutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  equipment: {
    type: [String],
  },
  muscle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = WorkOut = mongoose.model('workout45', WorkOutSchema);
