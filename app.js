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
