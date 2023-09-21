import { fastfy } from "fastify";
import { dotenv } from "dotenv";
dotenv.config();

const portEnds = process.env.PORT;
const server = fastfy();

server.listen({
  port: portEnds,
});
