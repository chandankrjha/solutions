// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Counter = require('./counters');

var LandingPageRedirectMetaData = new Schema({
    URL: { type: String, required: false },
    URL_override: { type: Number, required: false },
    landing_page_ID: { type: Number, required: false },
    landing_page_parameters: { type: String, required: false },
    weight: { type: String, required: false }
})

var LandingPageRedirectSchema = new Schema({
    _id: { type: Number, required: false },
    created_time: { type: Date, required: false },
    redirect_clean_URL_tag: { type: String, required: true },
    updated_time: { type: Date, required: false },
    meta_data: {
        general_error_url: { type: String, required: true },
        redirects: [LandingPageRedirectMetaData]
    }
}, { collection: 'landing_page_redirect' });

LandingPageRedirectSchema.pre('save', function(next) {
    var doc = this;

    var now = new Date();
    doc.updated_time = now;
    if (!this.created_time) {
        doc.created_time = now;
    }

    Counter.findByIdAndUpdate({ _id: 'landing_page_redirect' }, { $inc: { seq: 1 } }, function(error, counter) {
        if (error) {
            return next(error);
        } else {
            doc._id = counter.seq;
            next();
        }

    });
});



// set up a mongoose model and pass it using module.exports
module.exports = LandingPageRedirectSchema;
