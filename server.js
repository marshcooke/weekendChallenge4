var express = requre('express');
var bodyParser = require('body-parser');
var app = express();
var port = 4291

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', index);

app.listen(port, function() {
    console.log('server running on: ', port);
});