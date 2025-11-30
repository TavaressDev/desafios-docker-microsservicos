const express = require("express");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json([{ id: 1, user: "Bob" }]);
});

app.listen(port, () => {
  console.log("Serviço Users-service subiu com sucesso");
});
