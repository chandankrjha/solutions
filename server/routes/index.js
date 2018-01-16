// module.exports = function(app) {
// 	var resp = require('./../methods/response.js');
// 	var setupResponse = resp.setupResponse;
//     var express = require('express');
//     var bodyParser = require('body-parser');
//     var mongoose = require('mongoose');
//     var morgan = require('morgan');
//     var mongoose = require('mongoose');
//     var path = require('path')
//     var bcrypt = require('bcrypt');
//     var cookieParser = require('cookie-parser');
//     var salt = bcrypt.genSaltSync(10);
//     var jwt = require('problemstosolutions');
//     var config = require('../config/env/default');
//     //var User = require('../models/users');
//     app.set('superSecret', config.secret);
//     app.use(bodyParser.urlencoded({ extended: false }));
//     app.use(bodyParser.json());
//     app.use(morgan('dev'));
//     app.use(cookieParser());
    
//     var apiRoutes = express.Router();
    
//     require('./solutions')(apiRoutes);

//     app.get('/api/setup', function(req, res) {
//         var user = new User({
//             _id: '1',
//             first_name: 'Chandan',
//             last_name: 'Kumar Jha',
//             password: bcrypt.hashSync('chandan@123', salt),
//             username: 'chandankrjha',
//             email: 'chandan1909@gmail.com',
//             admin: true
//         });
        
        

//         res.status(200).send(setupResponse(200, 'First user saved successfully', user));
//         user.save(function(err) {
//             if (err) {
//                 res.status(500).send(setupResponse(500, 'Cannot setup the first user', JSON.stringify(err)));
//             } else {
//                 res.status(200).send(setupResponse(200, 'First user saved successfully', user));
//             }


//         });
        
        
//         var requirement = new User({
//             'statement': 'How to learn anything'
//         });
//     });
    
    

//     // var apiRoutes = express.Router();
//     // require('./auth')(apiRoutes);
//     // require('./landing_page')(apiRoutes);
//     // require('./landing_page_redirect')(apiRoutes);
//     // require('./user')(apiRoutes);
//     // app.use(function(req, res, next) {
//     //     var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;
//     //     if (req.originalUrl.indexOf('/api/login') != -1 || req.originalUrl.indexOf('/setup') != -1) {
//     //         //login and setup is allowed without token
//     //         req.decoded = "yes";
//     //         next();
//     //     } else if (token) {
//     //         jwt.verify(token, app.get('superSecret'), function(err, decoded) {
//     //             if (err) {
//     //                 return res.json({ success: false, message: 'Failed to authenticate token.' });
//     //             } else {
//     //                 req.decoded = decoded;
//     //                 next();
//     //             }
//     //         });

//     //     } else {
//     //         return res.status(403).send({
//     //             success: false,
//     //             message: 'No token provided.'
//     //         });

//     //     }
//     // });

//     app.use('/', apiRoutes);
//     app.listen(8888);
// }

const express = require('express');
let app = express();


app.get('/', (req, res) => {
  res.send('hello, world!');
})

let server = app.listen( 3000, () => {
  
})

















