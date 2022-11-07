let express = require('express');
let app = express();
console.log("Hello World");
let absolutePath=__dirname + '/views/index.html';
app.get(absolutePath,function(req,res){
    res.send('Hello Express')
});



































 module.exports = app;
