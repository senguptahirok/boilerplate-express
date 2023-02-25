let express = require('express');
let app = express();
require('dotenv').config();
/* console.log("Hello World"); */
console.log(process.env.MESSAGE_STYLE); 

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

app.get('/:word/echo',function(req,res){
  console.log('req.params object = ' + req.params[word]);
  res.json(req.params);
})

    
module.exports = app;