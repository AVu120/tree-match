"use strict";
exports.__esModule = true;
var express = require("express");
var beginRouter = express.Router();
var beginQuiz = require("../controllers/begin").beginQuiz;
beginRouter.get("/", beginQuiz);
module.exports = beginRouter;
