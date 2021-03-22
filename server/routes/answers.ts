const express = require("express");
const answersRouter = express.Router();
const { answerQuestion } = require("../controllers/answers");

answersRouter.post("/", answerQuestion);

module.exports = answersRouter;

export {};
