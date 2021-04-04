"use strict";
var express = require("express");
var rootRouter = express.Router();
var beginRouter = require("./begin");
var answersRouter = require("./answers");
rootRouter.use("/begin", beginRouter);
rootRouter.use("/answers", answersRouter);
module.exports = rootRouter;
