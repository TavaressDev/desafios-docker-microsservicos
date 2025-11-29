const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Servidor docker está funcionando");
});

app.listen(port, () => {
  console.log("Olá");
});
