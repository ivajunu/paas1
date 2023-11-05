const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const { Client } = require("pg");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.get("/api", async (_request, response) => {
  const { cats } = await client.query("SELECT * FROM cats");

  response.send(cats);
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

// const express = require("express");
// var cors = require("cors");
// path = require("path");
// app.use(cors());

// const dotenv = require("dotenv"),
//   { Client } = require("pg");

// dotenv.config();

// const client = new Client({
//   connectionString: process.env.PGURI,
// });

// client.connect();

// const app = express(),
//   port = process.env.PORT || 3000;

// app.use(express.static(path.join(path.resolve(), "dist")));

// app.get("/api", async (_request, response) => {
//   const { rows } = await client.query("SELECT * FROM cities WHERE name = $1", [
//     "Stockholm3",
//   ]);

//   response.send(rows);
// });

// app.listen(port, () => {
//   console.log(`Redo på http://localhost:${port}/`);
// });

// app.listen(80, function () {
//   console.log("CORS-enabled web server listening on port 80");
// });
