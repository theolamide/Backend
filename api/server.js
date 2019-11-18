const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../middleware/auth-middleware.js");
const authRouter = require("../routers/auth-router.js");
const howtoRouter = require("../routers/howto-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/howtos", authenticate, howtoRouter);

module.exports = server;
