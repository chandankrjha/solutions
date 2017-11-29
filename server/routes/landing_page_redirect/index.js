var mongoose = require('mongoose');
var LandingPageRedirectSchema = require('./../../models/landing_page_redirect.js');
var LandingPageRedirect = mongoose.model('LandingPageRedirect', LandingPageRedirectSchema);
var resp = require('./../../methods/response.js');
var setupResponse = resp.setupResponse;
var config = require('../../config/env/default');

module.exports = function(app) {

    app.get('/api/landing_page_redirect', function(req, res) {
        var limit, offset, search_query, deleted, query, query;

        if (req.query.q) {
            if (req.query.deleted && req.query.deleted == 'exclude') {
                limit = req.query.limit ? req.query.limit : 0;
                search_query = req.query.q ? req.query.q : '';
                offset = req.query.offset ? req.query.offset : 0;

                pattern = new RegExp(search_query, "i");
                query = LandingPageRedirect.find({ "redirect_clean_URL_tag": pattern }).limit(limit).skip(offset);
                count = LandingPageRedirect.find({ "redirect_clean_URL_tag": pattern }).count();
            }
        } else {
            limit = req.query.limit ? req.query.limit : 10;
            offset = req.query.offset ? req.query.offset : 0;
            deleted = req.query.deleted ? req.query.deleted : 0;
            query = LandingPageRedirect.find({}).limit(limit).skip(offset);
            count = LandingPageRedirect.find({}).count();
        }

        query.exec(function(err, item) {
            if (err) {
                return res.status(500).send(setupResponse(500, config.errorMsgGet + 'landing page redirect details', JSON.stringify(err)))
            }
            count.exec(function(err, count) {
                if (!err) {
                    var resp = setupResponse(200, 'landing pages redirect' + config.successMsgGet, item);
                    resp.count = count;
                    res.status(200).send(resp);
                }
            });
        });
    });

    app.post('/api/landing_page_redirect/', function(req, res) {
        var data = req.body;
        var lpr = new LandingPageRedirect(data);
        var response;

        lpr.save(function(err) {
            if (err) {
                res.status(500).send(setupResponse(500, config.errorMsgAdd + 'landing page redirect', JSON.stringify(err)))
            } else {
                res.status(200).send(setupResponse(200, 'Landing page redirect' + config.successMsgGet, lpr))
            }
        });


    });

    app.put('/api/landing_page_redirect/:lprid', function(req, res) {
        var response;
        var data = req.body;
        var id = data._id;
        delete data._id;

        LandingPageRedirect.findOneAndUpdate({ _id: req.params.lprid }, data, function(err, item) {
            if (err) {
                res.status(500).send(setupResponse(500, config.errorMsgUpdate + 'landing page redirect with id ' + req.params.lprid, JSON.stringify(err)))
            } else {
                data._id = id;
                res.status(200).send(setupResponse(200, 'Landing page redirect with id ' + id + config.successMsgUpdate, data))
            }

        });
    });


    app.delete('/api/landing_page_redirect/:lprid', function(req, res) {
        LandingPageRedirect.findOne({ _id: req.params.lprid }, function(err, item) {
            if (err) {
                res.status(500).send(setupResponse(500, config.errorMsgDelete + 'landing page redirect with id ' + req.params.lprid, JSON.stringify(err)))
            }
            item.remove(function(err) {
                if (err) {
                    res.status(500).send(500, config.errorMsgDelete + 'landing page redirect with id ' + req.params.lprid, JSON.stringify(err));
                } else {
                    res.status(200).send(setupResponse(200, 'Landing page redirect with id ' + req.params.lprid + config.successMsgDelete))
                }
            });
        });
    });

}
