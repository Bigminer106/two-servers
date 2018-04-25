const http = require('http');

var goodPORT = 7000;
var negPORT = 7500;

var goodServer = http.createServer(function(request, response) {
  response.end('You are an excellent coder!  :)');
});

var negServer = http.createServer(function(request, response) {
  response.end('You are a shitty gamer!  :(');
});

goodServer.listen(goodPORT, () => {
  console.log('Listening on Port ' + goodPORT);
});

negServer.listen(negPORT, () => {
  console.log('Listening on Port ' + negPORT);
});