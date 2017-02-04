var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('hello world teste deploy automatico')
});

app.get('/token/:token/:nome/:sobrenome',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    var token = req.params.token;
    var nome = req.params.nome;
    var sobrenome = req.params.sobrenome;

    var retorno = {};

    if(token == "facebot"){
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
                      "block_name": "relatorios",
                      "title": "Relatório"
                    },
                    {
                      "type": "show_block",
                      "block_name": "lista_compra",
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

        retorno = {
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

  res.send(JSON.stringify(retorno))
})
var array = [
    {"text":"id / descrição / valor "},
    {"text":"1) Compra tecido  R$300,00"},
    {"text":"2) Compra maquina R$4000,00"},
    {"text":"3) Compra computador R$2500,00 "},
    {"text":"4) compra acessorios R$500,00"},
]
app.get('/listaCompra',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    var retorno = {
        "messages":array
    }
    res.send( JSON.stringify(retorno))
})
//
app.get('/compra/:idCompra',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    var idCompra = parseInt(req.params.idCompra);
    var retorno ={
      "messages": [
        {
          "attachment": {
            "type": "template",
            "payload": {
              "template_type": "button",
              "text": array[idCompra].text,
              "buttons": [
                {
                  "type": "show_block",
                  "block_name": "aprovar",
                  "title": "Aprovar"
                },
                {
                  "type": "show_block",
                  "block_name": "recusar",
                  "title": "Reprovar"
                }
              ]
            }
          }
        }
      ]
    }
    res.send( JSON.stringify(retorno))
})

app.get('/solicitar',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    var retorno = {
        "messages":[
            {"text":"Faturamento liquido R$90000,00"},
            {"text":"Faturamento bruto R$140000,00 "}
        ]
    }

    res.send( JSON.stringify(retorno))
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
