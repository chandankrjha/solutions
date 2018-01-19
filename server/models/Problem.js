// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User');

// set up a mongoose model and pass it using module.exports
var ProblemSchema = new Schema({
    name: String,
    description: String,
    user: User,
    likes: Number
}, { collection: 'problems' });

module.exports = mongoose.model('Problem', ProblemSchema);