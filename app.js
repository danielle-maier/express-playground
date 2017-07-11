var express = require('express');
var app = express();
var port = app.listen(process.env.PORT || 3000);

app.get('/math/pi', function (request, response) {
  response.send(`${String(Math.PI)}`);
});

app.get('*', function (request, response) {
  response.status(404);
  response.send("<h1>This is not the page you are looking for....</h1>");
});

app.listen(port);
