let express = require('express');
let app = express();
console.log("Hello World");
let absolutePath=__dirname + '/views/index.html';
app.get('/',function(req,res){
    res.sendFile(absolutePath)
});
let path02=__dirname + '/public';
app.use('/public',function(express){
    express.static(path02)
});



































 module.exports = app;
