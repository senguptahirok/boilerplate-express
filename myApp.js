let express = require('express');
let app = express();
require('dotenv').config();
console.log("Hello World");
console.log(process.env.MESSAGE_STYLE);

let path01=__dirname + '/public';
app.use('/public',express.static(path01));

let absolutePath=__dirname + '/views/index.html';
app.get('/',function(req,res,next){
    console.log(req.method+' '+req.path+' -'+req.ip);
    res.sendFile(absolutePath);
    next();
});

let obj={'message': "Hello json"};
app.get("/json",function(req,res,next){
    const MESSAGE_STYLE = process.env['MESSAGE_STYLE'];
    if (MESSAGE_STYLE === 'uppercase')
      obj['message'] = obj['message'].toUpperCase();
    
    console.log(req.method+' '+req.path+' -'+req.ip);
    res.json(obj);
    next();});













 module.exports = app;
