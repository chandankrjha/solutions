// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User');

// set up a mongoose model and pass it using module.exports
var SolutionSchema = new Schema({
    points: Array,
    user: User
}, { collection: 'solutions' });

module.exports = mongoose.model('Solution', SolutionSchema);

