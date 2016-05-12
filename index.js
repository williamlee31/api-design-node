var app = require('./server/server');

app.set('port', 3000);

app.listen(app.get('port'), function() {
  console.log('Listening on port 3000');
})