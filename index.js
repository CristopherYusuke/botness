var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


var router = express();

app.get('/', function(request, response) {
  // response.render('/views/pages/index');
  response.send('hello world teste deploy automatico')
});

app.get('/token/:token',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    var token = req.params.token;
    var retorno = {
        "messages": []
    }
    if(token == "marcao"){
        // retorno.messages.push({text:"Olá marcao tudo bom com voce ?"})
        retorno = {
          "type": "show_block",
          "block_name": "relatorios",
          "title": "relatorios"
        }
    }else{
        retorno.messages.push({text:"Token invalido!"})
    }

  res.send( JSON.stringify(retorno))
})
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
