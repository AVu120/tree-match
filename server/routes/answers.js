"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var answersRouter = express.Router();
var answerQuestion = require("../controllers/answers").answerQuestion;
answersRouter.post("/", answerQuestion);
module.exports = answersRouter;
