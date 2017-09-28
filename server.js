var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 4291;
var index = require('./routes/index');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', index);

app.listen(port, function() {
    console.log('server running on: ', port);
});