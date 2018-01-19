const User = require('../../models/User');
const setupResponse = require('../../utils/commonUtils').setupResponse;
var bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');
var salt = bcrypt.genSaltSync(10);

module.exports = function(app) {

  app.post('/api/v0/users', (req, res) => {
    let {email, username, password, passwordConf} = req.body


    console.log(req.body);
    let userData = {
      email,
      username,
      password,
      passwordConf
    }

    if(email && username && password) {
      User.create(userData, (err, user) => {
        if(err) {
          return next(err);
        } else {
          return res.redirect('profile')
        }
      })
    }
  });

  app.get('/api/v0/users', (req, res) => {
    User.find({}, function(err, users) {
      var userMap = {};
  
      users.forEach(function(user) {
        userMap[user._id] = user;
      });
  
      res.status(200).send(userMap);  
    });
  })

  // change password
  // get particular user
  // update user
}