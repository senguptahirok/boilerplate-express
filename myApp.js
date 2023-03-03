let express = require('express');
let bodyParser = require('body-parser');
let app = express();
require('dotenv').config();

/* console.log("Hello World"); */
console.log(process.env.MESSAGE_STYLE); 

let URL_encoded_body = bodyParser.urlencoded({extended: false});
app.use(function(req,res,next){
  console.log(req.method + ' ' + req.path +' - ' + req.ip);
  next();
});

let path01=__dirname + '/public';
app.use('/public',express.static(path01));

let absolutePath=__dirname + '/views/index.html';
app.get('/',function(req,res){
    res.sendFile(absolutePath);});

let obj={'message': "Hello json"};
app.get("/json",function(req,res){
    const MESSAGE_STYLE = process.env['MESSAGE_STYLE'];
    if (MESSAGE_STYLE === 'uppercase')
      obj['message'] = obj['message'].toUpperCase();
    res.json(obj);});

app.get('/now', function(req,res,next){
  req.time = new Date().toString();
  console.log('time = ' + req.time);
  next();}, function(req,res){
    res.send({time: req.time});});    

let echoObj = {};    
app.get('/:word/echo',function(req,res){
  console.log('req.params = ' + req.params.word);
  echoObj['echo'] = req.params.word;
  console.log('echo = ' + echoObj['echo']);
  res.json(echoObj);
});

let nameObj = {};
/*app.get('/name',function(req,res){
  nameObj['name'] = req.query['first'] + ' ' + req.query['last'];
  res.json(nameObj);
});
*/
/*
let handler = function(req,res){
  console.log(req.query);
  nameObj['name'] = Object.values(req.query).reduce(function(accum,a){
    accum = accum + ' ' + a;
    return accum;});
  res.json(nameObj);
}
app.route('/name').get(handler).post(handler);
*/
/*let path02 = __dirname + '/name'; */
console.log('URL_encoded_body = ' + URL_encoded_body);
app.use(URL_encoded_body);

let handler01 = function(req,res){
  console.log('req.body = ' + req.body);
  nameObj['name'] = Object.values(req.body).reduce(function(accum,a){
    accum = accum + ' ' + a;
    return accum;});
  res.json(nameObj);
}
app.route('/name').get(handler01).post(handler01);
    
module.exports = app;