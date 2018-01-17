let mongoose = require('mongoose');

let solutionSchema = new mongoose.Schema({
  points: {
    type: Array,
    required: true
  },
  user: {
    required: true,
    type: String
  }
})