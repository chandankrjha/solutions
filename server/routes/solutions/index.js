var mongoose = require('mongoose');
var LandingPageSchema = require('../../models/landing_page.js');
var LandingPage = mongoose.model('LandingPage', LandingPageSchema);
var resp = require('./../../methods/response.js');
var setupResponse = resp.setupResponse;
var config = require('../../config/env/default');



/***
 * 
 * s => solutions
 * 
 * 
 * ***/

const solutionsConstants = {
    'API': 'api',
    'version': 'v0',
    'solutions': 's'
}

module.exports = function(app) {

    app.get('/api/v0/s', function(req, res) {
        var limit, offset, search_query, deleted, query, query;
        
        query.exec(function(err, item) {
            if (err) {
                return []
            }
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
