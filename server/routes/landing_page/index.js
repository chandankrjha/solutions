var mongoose = require('mongoose');
var LandingPageSchema = require('../../models/landing_page.js');
var LandingPage = mongoose.model('LandingPage', LandingPageSchema);
var resp = require('./../../methods/response.js');
var setupResponse = resp.setupResponse;
var config = require('../../config/env/default');

module.exports = function(app) {

    app.get('/api/landing_page', function(req, res) {
        var limit, offset, search_query, deleted, query, query;

        if (req.query.q) {
            if (req.query.deleted && req.query.deleted == 'exclude') {
                limit = req.query.limit ? req.query.limit : 0;
                search_query = req.query.q ? req.query.q : '';
                offset = req.query.offset ? req.query.offset : 0;

                pattern = new RegExp(search_query, "i");
                query = LandingPage.find({ "meta_name": pattern }).limit(limit).skip(offset);
                count = LandingPage.find({ "meta_name": pattern }).count();
            }
        } else if (req.query.redirect_filter) {
            query = LandingPage.find({}).sort({ _id: 'desc' });
            count = LandingPage.find({}).count();
        } else {
            limit = req.query.limit ? req.query.limit : 10;
            offset = req.query.offset ? req.query.offset : 0;
            deleted = req.query.deleted ? req.query.deleted : 0;
            query = LandingPage.find({}).sort({ _id: 'desc' }).limit(limit).skip(offset);
            count = LandingPage.find({}).count();
        }

        query.exec(function(err, item) {
            if (err) {
                return res.status(500).send(setupResponse(500, config.errorMsgGet + 'landing page details', JSON.stringify(err)))
            }

            count.exec(function(err, count) {

                if (!err) {
                    var resp = setupResponse(200, 'landing pages' + config.successMsgGet, item);
                    resp.count = count;
                    res.status(200).send(resp);
                }
            });
        });
    });

    app.post('/api/landing_page', function(req, res) {

        var data = req.body;
        var lp = new LandingPage(data);
        var response;
        lp.save(function(err) {
            if (err) {
                res.status(500).send(setupResponse(500, config.errorMsgAdd + 'landing page', JSON.stringify(err)))
            } else {
                res.status(200).send(setupResponse(200, 'Landing page' + config.successMsgGet, lp))
            }
        });


    });

    app.put('/api/landing_page/:lpid', function(req, res) {
        var response;
        var data = req.body;
        var id = data._id;
        delete data._id;
        LandingPage.findOneAndUpdate({ _id: req.params.lpid }, data, function(err, item) {
            if (err) {
                res.status(500).send(setupResponse(500, config.errorMsgUpdate + 'landing page with id ' + req.params.lprid, JSON.stringify(err)))
            } else {
                data._id = id;
                res.status(200).send(setupResponse(200, 'Landing page with id ' + id + config.successMsgUpdate, data))
            }

        });
    });


    app.delete('/api/landing_page/:lpid', function(req, res) {
        LandingPage.findOne({ _id: req.params.lpid }, function(err, item) {
            if (err) {
                res.status(500).send(setupResponse(500, config.errorMsgDelete + 'landing page with id ' + req.params.lpid, JSON.stringify(err)))
            }
            item.remove(function(err) {
                if (err) {
                    res.status(500).send(500, config.errorMsgDelete + 'landing page with id ' + req.params.lpid, JSON.stringify(err));
                } else {
                    res.status(200).send(setupResponse(200, 'Landing page with id ' + req.params.lpid + config.successMsgDelete))
                }
            });
        });
    });

};
