var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


var router = express();

app.get('/', function(request, response) {
  // response.render('/views/pages/index');
  response.send('hello world teste deploy automatico')
});

app.get('/teste',function (req,res) {
  res.setHeader('Content-Type', 'application/json');
  res.send( JSON.stringify({teste:"teste"}))
})
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
