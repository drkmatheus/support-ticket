import http from "node:http";

function listener(req, res) {
  return res.end("Working!");
}

http.createServer(listener).listen(3333);
