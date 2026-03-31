import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";

async function listener(req, res) {
  await jsonHandler(req, res);
  console.log(req.body);

  return res.end(JSON.stringify("Resposta enviada!"));
}

http.createServer(listener).listen(3333);
