const express = require("express");
var cors = require("cors");
path = require("path");

const app = express(),
  port = process.env.PORT || 3000;

app.get("/api", (_request, response) => {
  response.send({ ivanna: "e bäst" });
});

app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

app.use(cors());
