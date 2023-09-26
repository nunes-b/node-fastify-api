const { fastify } = require("fastify");
require("dotenv").config();
const DatabasePostgres = require("./database-postgres");
// const DatabaseMemory = require("./database-memory.js");

const portEnds = process.env.PORT;
const server = fastify();

server.get("/", () => {
  return "Hello World with fastify!";
});

//db com PG
const database = new DatabasePostgres();

//db
// const database = new DatabaseMemory();

// Rotas -->
server.post("/videos", async (request, reply) => {
  const { title, description, duration } = request.body;

  await database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.get("/videos", async (request) => {
  const search = request.query.search;
  const videos = await database.list(search);

  return videos;
});

server.put("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;
  await database.update(videoId, {
    title,
    description,
    duration,
  });
  return reply.status(204).send();
});

server.delete("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;
  await database.delete(videoId);
  return reply.status(204).send();
});

server.listen(portEnds ?? 3999, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
    process.exit(1);
  }
  console.log(`Server is running on port http://localhost:${portEnds}/`);
});
