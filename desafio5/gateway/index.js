const express = require("express");
const httpProxy = require("express-http-proxy");
const app = express();
const port = 8000;

app.use("/users", httpProxy("http://users:3001"));
app.use("/orders", httpProxy("http://orders:3002"));

app.get("/", (req, res) => {
  res.send("O Gateway da API está funcionando! 🚀");
});

app.listen(port, () => {
  console.log("Gateway subiu com sucesso");
});
