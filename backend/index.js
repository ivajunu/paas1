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
  console.log("response: ", { response });
  const { rows } = await client.query("SELECT * FROM cats");
  response.send(rows);
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});

app.listen(function () {
  console.log("CORS-enabled web server listening on port 80");
});
