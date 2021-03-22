"use strict";
exports.__esModule = true;
var express = require("express");
var answersRouter = express.Router();
var answerQuestion = require("../controllers/answers").answerQuestion;
answersRouter.post("/", answerQuestion);
module.exports = answersRouter;
