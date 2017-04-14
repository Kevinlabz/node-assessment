// MODULES
const express = require('express');
const bodyParser = require('body-parser');
// we want to remember our user state before and after requests
const session = require('express-session');

//scripts
const userCtrl = require('./userCtrl.js');


// CONFIG SECRETS
// const config = require('./.config.js');

// instantiate express so we can use it
var app = express();

// assign a port to listen to
var port = 8989;

// MIDDLEWARE
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//Listen to the port.
// app.listen(port, function() {
//   console.log('Listening on port', port);
// });


//Gets--------------------

//Get all the users.
app.get('/api/users', function (req, res, next) {
    res.status(200).send(userCtrl.readAll);
});

//app.get('/api/users', userCtrl.readAll);

//------------------------


module.exports = app;