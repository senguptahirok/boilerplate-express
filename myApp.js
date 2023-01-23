let express = require('express');
let app = express();
require('dotenv').config();
console.log("Hello World");
console.log(process.env.MESSAGE_STYLE);

let path01=__dirname + '/public';
app.use('/public',express.static(path01));

let absolutePath=__dirname + '/views/index.html';
app.get('/',function(req,res){
    res.sendFile(absolutePath)
});

let obj={message: "Hello json"};
app.get("/json",function(req,res){
    const msg_style = process.env['MESSAGE_STYLE'];
    if (msg_style === 'allCaps')
      obj.message = obj.message.toUpperCase();
    
    res.json(obj)});













 module.exports = app;
