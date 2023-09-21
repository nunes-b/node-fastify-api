const { fastify } = require("fastify");
require("dotenv").config();
const DatabaseMemory = require("./database-memory.js");

const portEnds = process.env.PORT;
const server = fastify();

server.get("/", () => {
  return "Hello World with fastify!";
});

//db
const database = new DatabaseMemory();

// Rotas -->
server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.get("/videos", () => {
  const videos = database.list();

  return videos;
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
