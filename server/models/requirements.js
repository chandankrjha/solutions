// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var RequirementsSchema = new Schema({
    
}, { collection: 'requirements' });

module.exports = mongoose.model('Requirements', RequirementsSchema);
