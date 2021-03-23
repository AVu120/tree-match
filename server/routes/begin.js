"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var beginRouter = express.Router();
var beginQuiz = require("../controllers/begin").beginQuiz;
beginRouter.get("/", beginQuiz);
module.exports = beginRouter;
