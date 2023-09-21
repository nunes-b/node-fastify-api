const { fastify } = require("fastify");
require("dotenv").config();

const portEnds = process.env.PORT;
const server = fastify();

server.get("/", () => {
  return "Hello World with fastify!";
});

server.listen(portEnds, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
    process.exit(1);
  }
  console.log(`Server is running on port http://localhost:${portEnds}/`);
});
