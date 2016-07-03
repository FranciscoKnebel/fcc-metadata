var express = require("express");
var multer  = require("multer");
var app = express();

app.use('/css', express.static(__dirname + '/client/css'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/LICENSE', function (req, res) {
  res.sendFile(__dirname + 'LICENSE.md');
})

var port = process.env.PORT || 80;
app.listen(port, function(){
  console.log('Listening on port ' + port + '...');
});