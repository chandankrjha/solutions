let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    require: true
  },
  passwordConf: {
    type: String,
    required: true
  }
})