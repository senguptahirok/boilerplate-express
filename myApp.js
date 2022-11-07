let express = require('express');
let app = express();
console.log("Hello World");
let absolutePath1=__dirname + '/public';
let absolutePath2=__dirname + '/views/index.html';
app.use('/public',function(){
    express.static(absolutePath1)
});
app.get('/',function(req,res){
    res.sendFile(absolutePath2)
});



































 module.exports = app;
