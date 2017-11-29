// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CounterSchema = Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
}, { collection: 'counters' });

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Counter', CounterSchema);
