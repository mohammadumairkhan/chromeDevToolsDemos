var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/api/time', function (req, res) {
  	res.send({
  		time: new Date()
  	});
});

var server = app.listen(3000, function () {

  var port = server.address().port;

  console.log('Enter the Dragon !!! at http://localhost:', port);

});