let express = require('express');
let app = express();
console.log("Hello World");
let absolutePath=__dirname + '/public';
app.use('/',function(req,res){
    express.static(absolutePath)
});
app.get('/',function(req,res){
    res.sendFile(absolutePath)
});



































 module.exports = app;
