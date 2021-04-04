const express = require("express");
const rootRouter = express.Router();
const beginRouter = require("./begin");
const answersRouter = require("./answers");

rootRouter.use("/begin", beginRouter);
rootRouter.use("/answers", answersRouter);

module.exports = rootRouter;
