const express = require("express");

const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.json([{ id: 1, item: "Mouse", price: 50 }]);
});

app.listen(port, () => {
  console.log("Serviço Orders-service subiu com sucesso");
});
