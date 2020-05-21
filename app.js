
var express = require('express');
var app = express();

app.set('port', process.env.port || 8000)


app.get('/', (req, res) =>{
res.send("Hello")

})

var server = app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}`))

module.exports = server;