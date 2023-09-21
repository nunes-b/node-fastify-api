const { fastify } = require("fastify");
require("dotenv").config();

const portEnds = process.env.PORT;
const server = fastify();

server.get("/", () => {
  return "Hello World with fastify!";
});

// Rotas -->
server.post("/videos", () => {
  return "Insere o video";
});
server.get("/videos", () => {
  return "Pega todos";
});
server.get("/videos/:id", () => {
  return "Pega um unico";
});
server.put("/videos/:id", () => {
  return "Atualiza";
});
server.delete("/videos/:id", () => {
  return "Deleta";
});

server.listen(portEnds, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
    process.exit(1);
  }
  console.log(`Server is running on port http://localhost:${portEnds}/`);
});
