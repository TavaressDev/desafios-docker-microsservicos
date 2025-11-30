const express = require("express");

const app = express();
const port = 8000;

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Bob" }]);
});

app.listen(port, () => {
  console.log("Serviço A subiu com sucesso");
});
