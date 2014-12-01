var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/api/time', function (req, res) {
  	res.send({
  		time: new Date()
  	});
});

app.get('/home', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/networks', function(req, res){
	res.sendFile(__dirname + 'Networks/index.html');
});

app.get('/elements', function(req, res){
	res.sendFile(__dirname + 'Elements/index.html');
});

var server = app.listen(3000, function () {
  
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});