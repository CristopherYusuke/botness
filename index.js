var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


var router = express();

app.get('/', function(request, response) {
  // response.render('/views/pages/index');
  response.send('hello world teste deploy automatico')
});

app.get('/token/:token/:nome/:sobrenome',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    var token = req.params.token;
    var nome = req.params.nome;
    var sobrenome = req.params.sobrenome;

    var retorno = {
        "messages": []
    }
    if(token == "facebot"){
        // retorno.messages.push({text:"Olá marcao tudo bom com voce ?"})
        retorno = {
  "messages": [
    {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "button",
          "text": "Olá "+ nome + " "+sobrenome+", oque o Sr(a) gostaria de fazer" ,
          "buttons": [
            {
              "type": "show_block",
              "block_name": "relatorio",
              "title": "Relatório"
            },
            {
              "type": "show_block",
              "block_name": "lib_compras",
              "title": "Liberar Compras"
            },
            {
              "type": "show_block",
              "block_name": "extras",
              "title": "Extras"
            }
          ]
        }
      }
    }
  ]
}
    }else{
        retorno ={
  "messages": [
    {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "button",
          "text": nome + ", algo deu errado , gostaria de tentar novamente ?" ,
          "buttons": [
            {
              "type": "show_block",
              "block_name": "login",
              "title": "Fazer Login novamente"
            }
          ]
        }
      }
    }
  ]
}
    }

  res.send( JSON.stringify(retorno))
})

app.get('/listaCompra',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    var retorno = {
        "messages": [
            {
              "attachment": {
                "type": "template",
                "payload": {
                  "template_type": "button",
                  "text": "Olá "+ nome + " "+sobrenome+", oque o Sr(a) gostaria de fazer" ,
                  "buttons": [
                    {
                      "type": "show_block",
                      "title": "Compra 1 "
                    },
                    {
                      "type": "show_block",
                      "title": "Compra 2"
                    },
                    {
                      "type": "show_block",
                      "title": "Compra 3"
                    }
                  ]
                }
              }
            }
        ]
    }
    res.send( JSON.stringify(retorno))
})

app.get('/compra/:idCompra',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    var idCompra = req.params.idCompra;
    var retorno = {
        "messages"[
            {"text":idCompra +" pego pelo parametro"}
        ]
    }
    res.send( JSON.stringify(retorno))
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
