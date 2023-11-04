const express = require("express");
var cors = require("cors");

const app = express(),
  port = process.env.PORT || 3000;

app.get("/", (_request, response) => {
  response.send({ ivanna: "e bäst" });
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});

app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

app.use(cors());
