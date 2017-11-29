// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var UserSchema = new Schema({
    _id: String,
    username: String,
    first_name: String,
    last_name: String,
    password: String,
    email: String,
    admin: Boolean
}, { collection: 'user' });

module.exports = mongoose.model('User', UserSchema);
