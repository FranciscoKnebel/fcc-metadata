document.getElementById('fileform').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = document.getElementById('fileform');

  var data = new FormData(form);

  var req = new XMLHttpRequest();
  req.open("POST", '/upload');
  req.onload = function(event) {
    if(req.status == 200) {
      var fileData = JSON.parse(event.target.responseText);
      var content = document.createElement('tr');
      content.innerHTML = "<td>" + fileData.name + "</td><td>" + fileData.type +"</td><td>" + fileData.size + "</td>";
      document.getElementById('results').appendChild(content);
    } else {
      var content = document.createElement('tr');
      content.innerHTML = '<td colspan="3" class="text-center">File error.</td>';
      document.getElementById('results').appendChild(content);
    }
  };
  req.send(data);

});