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


/* File handling */
var upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'),  function(req, res, next) {
  console.log(req.file);
  var fileInfo = parseNewFile(req.file);
  
  res.contentType('application/json');
  res.send(fileInfo);
});


var port = process.env.PORT || 80;
app.listen(port, function(){
  console.log('Listening on port ' + port + '...');
});


function parseNewFile(file) {
  var obj = {
    name: file.originalname,
    type: file.mimetype,
    size: file.size + " bytes"
  }
  
  return obj;
}