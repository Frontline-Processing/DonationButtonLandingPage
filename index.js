'use strict';
/**
 * Basic Express Web Server.
 */
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/'));

module.exports = app;
app.on('start', function () {
    console.log('Application ready to serve requests.');
});