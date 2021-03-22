const express = require("express");
const beginRouter = express.Router();
const { beginQuiz } = require("../controllers/begin");

beginRouter.get("/", beginQuiz);

module.exports = beginRouter;

export {};
