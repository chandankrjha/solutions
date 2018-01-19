const User = require('../../models/User');
const setupResponse = require('../../utils/commonUtils').setupResponse;
var bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');
var salt = bcrypt.genSaltSync(10);

var cons = require('../constants');

const PRE_URL = cons.API + '/' + cons.VERSION_NO + '/';
const USERS = 'users';

const URL = PRE_URL + USERS;

module.exports = function(app) {

    app.post(URL, (req, res) => {
        let { first_name, last_name, password, username, email, admin } = req.body

        let user = new User({
            first_name,
            last_name,
            password,
            username,
            email,
            admin
        })

        user.save(function(err) {
            if (err) {
                res.status(500)
                    .send(setupResponse(500, 'Cannot create the user', JSON.stringify(err)));
            } else {
                res.status(200).
                    send(setupResponse(200, 'user saved successfully', user));
            }
        });
    });

    app.get(URL , (req, res) => {
        User.find({}, function(err, users) {
            var userMap = {};
        
            users.forEach(function(user) {
                userMap[user._id] = user;
            });
        
            res.status(200).send(userMap);  
        });
    })

    app.put(URL + '/:id', function(req, res) {
        var id = req.params.id;

        User.findOne({ "_id": id }, function(err, item) {
            if (item) {
                item = req.body;
                delete item._id
                User.update({ "_id": id }, item, function(err, values) {
                    if (err) {
                            res.status(500)
                            .send(setupResponse(500, config.errorMsgUpdate + 'user details', JSON.stringify(err)))
                        } else {
                            res.status(200)
                            .send(setupResponse(200, 'User details' + config.successMsgUpdate, item))
                        }
                });
            } else {
                res.status(404)
                    .send(setupResponse(404, 'User details' + config.errorNotFound, {}))
            }
        });
    });

    app.post(URL + '/change_password', function(req, res) {
        User.findOne({ '_id': req.body._id }, function(err, item) {
            var response;
            var password = req.body.old_password;
            var passwordFromDB = item.password;
            if (bcrypt.compareSync(password, passwordFromDB)) {
                item.password = bcrypt.hashSync(req.body.new_password, salt);
                item.save(function(err) {
                    if (err) {
                        res.status(500).send(setupResponse(500, config.errorChangePassword, JSON.stringify(err)))
                    } else {
                        res.status(200).send(setupResponse(200, 'password' + config.successMsgUpdate))
                    }

                });
            } else {
                res.status(400).send(setupResponse(400, config.oldPasswordIncorrect))
            }
        })
    });

    app.get('/api/users/:id', function(req, res) {
        var id = req.params.id;

        User.findOne({ "_id": id }, function(err, item) {
            if (item) {
                var toSend = JSON.parse(JSON.stringify(item));
                delete toSend.password;
                res.status(200)
                    .send(setupResponse(200, 'User details' + config.successMsgGet, toSend))
            } else {
                res.status(200)
                    .send(setupResponse(200, config.errorMsgGet + 'user details with id' + id, toSend))
            }

        });
    });
}