var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html', function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
})

app.get('/data', function(req, res){
  res.send(jsonData);
})

var port = 3000;

app.listen(port, function(){
  console.log('Listening on port 3000');
})
