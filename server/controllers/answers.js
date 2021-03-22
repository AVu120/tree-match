"use strict";
exports.__esModule = true;
exports.answerQuestion = void 0;
var answerQuestion1 = function (answer) {
    if (answer === "courtyard")
        return {
            question: {
                step_id: 2,
                question: "Do you like cooking?",
                answers: ["yes", "no"]
            },
            match: null
        };
    if (answer === "garden")
        return {
            question: {
                step_id: 5,
                question: "Do you want a fruiting tree?",
                answers: ["yes", "no"]
            },
            match: null
        };
    else
        return {
            question: {
                step_id: 8,
                question: "Do you want a fruiting tree?",
                answers: ["yes", "no"]
            },
            match: null
        };
};
var answerQuestion = function (req, res, next) {
    var _a = req.body, step_id = _a.step_id, answer = _a.answer;
    switch (step_id) {
        case 1:
            return res.send(answerQuestion1(answer));
    }
};
exports.answerQuestion = answerQuestion;
