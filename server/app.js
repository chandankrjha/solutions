var express = require('express');
var db = require('./mongoose');
var app = express();
require('./routes')(app);