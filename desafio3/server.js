const express = require("express");
const { createClient } = require("redis");

const app = express();
const port = 8080;

const client = createClient({
  url: "redis://cache:6379",
});

client.on("error", (err) => console.log("Redis Client Error", err));

async function startServer() {
  await client.connect();

  app.get("/", async (req, res) => {
    const visitas = await client.incr("visitas");
    res.send(
      `<h1>Contador de visitas</h1><p>Esta página foi vista <b>${visitas}</b> vezes. </p>`
    );
  });

  app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
  });
}

startServer();
