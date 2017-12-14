// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var SolutionsSchema = new Schema({
    _id: String,
    steps: Array,
    author: String,
    postDate: Date,
    modifiedDate: Date,
    liked: Number
}, { collection: 'solutions' });

module.exports = mongoose.model('User', SolutionsSchema);
