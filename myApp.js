let express = require('express');
let app = express();
console.log("Hello World");
let absolutePath=__dirname + '/views/index.html';
app.use('/',function(req,res){
    express.static(__dirname + '/public')
});
app.get('/',function(req,res){
    res.sendFile(absolutePath)
});



































 module.exports = app;
