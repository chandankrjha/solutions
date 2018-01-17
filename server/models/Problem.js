let mongoose = require('mongoose');

let problemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: String, //user id mostly or anonymous string
    required: true
  },
  likes: {
    type: Number,
    required: false
  }
})