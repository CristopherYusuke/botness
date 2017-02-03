'use strict';

const
  bodyParser = require('body-parser'),
  config = require('config'),
  crypto = require('crypto'),
  express = require('express'),
  https = require('https'),
  request = require('request');



var router = express();

router.get('/webhook',function(req,res){
  res.send('ok')
})

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
