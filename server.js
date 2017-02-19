// set up ======================================================================
var express  = require('express');
var server      = express();                               // create our server w/ express
//var mongoose = require('mongoose');
var port = require('./config/nodePort').port;                        // mongoose for mongodb
var configuredPort     = process.env.PORT || port;                // set the port
var database = require('./config/database');            // load the database config

var morgan = require('morgan');         // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration ===============================================================
//mongoose.connect(database.url);     // connect to dynamoDB database on modulus.io

server.use(express.static(__dirname + '/public'));                 // set the static files location /public/images will be /img for users
server.use(morgan('dev'));                                         // log every request to the console
server.use(bodyParser.urlencoded({'extended':'true'}));            // parse serverlication/x-www-form-urlencoded
server.use(bodyParser.json());                                     // parse serverlication/json
server.use(bodyParser.json({ type: 'serverlication/vnd.api+json' })); // parse serverlication/vnd.api+json as json
server.use(methodOverride());

// routes ======================================================================
require('./server/routes.js')(server);

// listen (start server with node server.js) ======================================
server.listen(configuredPort);
console.log("server listening on port " + configuredPort);
