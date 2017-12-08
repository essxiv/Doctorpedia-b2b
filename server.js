var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db/connection.js');
var favicon = require('serve-favicon');

var app = express();

app.use(favicon(path.join(__dirname, './public/images/favicon.png')))

// app.use(express.favicon(__dirname + './public/img/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(8080, function() {
    console.log('Listening On http://138.68.248.193:8080/');
});

// app.listen(8080, '138.68.248.193', function() {
//     console.log('Listening On http://138.68.248.193:8080/');
// });

// app.listen(8080, '138.68.248.193', function() {
//     console.log('Listening On http://138.68.248.193:8080/');
// });
