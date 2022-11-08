let express = require('express');
let app = express();
console.log("Hello World");
let path02=__dirname + '/public';
app.use('/',function(){
    express.static(path02)    
});
let absolutePath=__dirname + '/views/index.html';
app.get('/',function(req,res){
    res.sendFile(absolutePath)
});


































 module.exports = app;
