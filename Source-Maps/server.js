var express = require('express');
var app = express();

app.use(express.static(__dirname));

var server = app.listen(3001, function () {

  var port = server.address().port;

  console.log('Enter the Source Maps !!! at http://localhost:', port);

});