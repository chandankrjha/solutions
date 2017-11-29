var User = require('./../../models/users');
var resp = require('./../../methods/response.js');
var setupResponse = resp.setupResponse;
var config = require('../../config/env/default');

module.exports = function(app) {
    var bcrypt = require('bcrypt');
    var cookieParser = require('cookie-parser');
    var salt = bcrypt.genSaltSync(10);
    var url = 'mongodb://localhost:27017/prod_landing_pages';
    var jwt = require('jsonwebtoken');
    var superSecret = 'chandankrjhameanapp';

    app.post('/api/login', function(req, res) {
        var response;
        var username = req.body.username;
        var password = req.body.password;
        User.findOne({ "username": username }, function(err, item) {

            if (item) {
                var passwordFromDB = item.password;
                if (bcrypt.compareSync(password, passwordFromDB)) {
                    var token = jwt.sign(item, superSecret, {
                        expiresIn: 60 * 60 * 24 // expires in 24 hours
                    });
                    var toSend = JSON.parse(JSON.stringify(item));
                    delete toSend.password;

                    response = setupResponse(200, config.successfulLogin, toSend)
                    res.cookie('token', token);
                    res.cookie('_id', item._id);
                    res.status(200);
                    res.send(response);
                } else {
                    res.status(401).send(setupResponse(401, config.invalidLogin));
                }
            }
            else {
                res.status(401).send(setupResponse(401, config.invalidLogin));
            }
        });
    });

    app.get('/api/aliveSession', function(req, res) {
        User.findOne({ "_id": req.cookies._id }, function(err, item) {
            if (item) {
                var toSend = JSON.parse(JSON.stringify(item));
                delete toSend.password;
                res.status(200).send(setupResponse(200, config.sessionAlive, toSend));
            } else {
                res.status(403).send(setupResponse(403, config.sessionNotAlive));
            }

        });
    });

    app.post('/api/logout', function(req, res) {
        res.clearCookie("token");
        res.clearCookie("_id");
        res.status(200).send(setupResponse(200, config.successLogout));
    });
}
