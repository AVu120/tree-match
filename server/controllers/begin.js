"use strict";
exports.__esModule = true;
exports.beginQuiz = void 0;
var beginQuiz = function (req, res, next) {
    res.send({
        question: {
            step_id: 1,
            question: "Do you have a courtyard, garden, or a farm?",
            answers: ["courtyard", "garden", "farm"]
        },
        match: null
    });
};
exports.beginQuiz = beginQuiz;
