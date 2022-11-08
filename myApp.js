let express = require('express');
let app = express();
console.log("Hello World");

let path01=__dirname + '/public';
app.use('/public',express.static(path01));

let absolutePath=__dirname + '/views/index.html';
app.get('/',function(req,res){
    res.sendFile(absolutePath)
});

let obj={"message": "Hello json"};
app.get("/json",function(req,res){
    res.json(obj);
});






























 module.exports = app;
