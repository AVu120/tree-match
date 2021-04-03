"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerQuestion = void 0;
var answerQuestion1 = function (answer) {
    if (answer === "courtyard")
        return {
            question: {
                step_id: 2,
                question: "Do you like cooking?",
                answers: ["yes", "no"],
            },
            match: null,
        };
    if (answer === "garden")
        return {
            question: {
                step_id: 5,
                question: "Do you want a fruiting tree?",
                answers: ["yes", "no"],
            },
            match: null,
        };
    // if (answer === "farm")
    else
        return {
            question: {
                step_id: 8,
                question: "Do you want a fruiting tree?",
                answers: ["yes", "no"],
            },
            match: null,
        };
};
var answerQuestion2 = function (answer) {
    if (answer === "yes")
        return {
            question: {
                step_id: 3,
                question: "Do you like spicy food?",
                answers: ["yes", "no"],
            },
            match: null,
        };
    // if (answer === "no")
    else
        return {
            question: {
                step_id: 4,
                question: "How much do you like sweeping the courtyard?",
                answers: ["not at all", "seriously no I'm not playing here"],
            },
            match: null,
        };
};
var answerQuestion3 = function (answer) {
    if (answer === "yes")
        return {
            question: null,
            match: {
                name: "Curry leaf tree",
                description: "A small tree that's great for courtyards, from which leaves can be picked and added to any curry!",
            },
        };
    // if (answer === "no")
    else
        return {
            question: null,
            match: {
                name: "Bay tree",
                description: "A robust small tree with small, fragrant, dark green leaves that are great for use in stews and curries.",
            },
        };
};
var answerQuestion4 = function (answer) {
    if (answer === "not at all")
        return {
            question: null,
            match: {
                name: "Frangipani",
                description: "The marker of any gentrified inner-Sydney suburb. You'll have beautiful flowers all summer long!",
            },
        };
    // if (answer === "seriously no I'm not playing here")
    else
        return {
            question: null,
            match: {
                name: "Plum blossom",
                description: "Has delicate pink flowers in spring, and is less effort to look after than a Frangipani.",
            },
        };
};
var answerQuestion5 = function (answer) {
    if (answer === "yes")
        return {
            question: {
                step_id: 6,
                question: "On a scale of 1-10, how much do you like citrus?",
                answers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            },
            match: null,
        };
    // if (answer === "no")
    else
        return {
            question: null,
            match: {
                name: "Eucalyptus",
                description: "Australia's favourite, this dangerously flammable tree is home to the national animal: The Drop Bear.",
            },
        };
};
var answerQuestion6 = function (answer) {
    if (parseInt(answer) < 3)
        return {
            question: null,
            match: {
                name: "Coconut palm",
                description: "A tall tree that drops dangerously oversized drupes onto people's heads.",
            },
        };
    if (parseInt(answer) < 5)
        return {
            question: null,
            match: {
                name: "Apple tree",
                description: "The most basic and popular fruit tree!",
            },
        };
    if (parseInt(answer) < 7)
        return {
            question: {
                step_id: 7,
                question: "Are you an awesome cool person?",
                answers: ["yes", "no"],
            },
            match: null,
        };
    if (parseInt(answer) < 9)
        return {
            question: null,
            match: {
                name: "Kaffir lime",
                description: "2 for the price of 1. Leaves are great in curries and stir fry, but also grows limes!",
            },
        };
    if (parseInt(answer) === 9)
        return {
            question: {
                step_id: 11,
                question: "How many pigs do you own?",
                answers: ["none", "some", "heaps"],
            },
            match: null,
        };
    // if (parseInt(answer) === 10)
    else
        return {
            question: null,
            match: {
                name: "Lemon tree",
                description: "The most prodigious fruiter of all the citrus!",
            },
        };
};
var answerQuestion7 = function (answer) {
    if (answer === "yes")
        return {
            question: null,
            match: {
                name: "Feijoa tree",
                description: "King of fruits, fruit of kings! Feijoas are the best fruit.",
            },
        };
    // if (answer === "no")
    else
        return {
            question: null,
            match: {
                name: "Orange tree",
                description: "Is the fruit named for the colour or the colour named for the fruit?",
            },
        };
};
var answerQuestion8 = function (answer) {
    if (answer === "yes")
        return {
            question: {
                step_id: 9,
                question: "Are you an awesome cool person?",
                answers: ["yes", "no"],
            },
            match: null,
        };
    // (answer === "no")
    else
        return {
            question: {
                step_id: 10,
                question: "Do you like cooking?",
                answers: ["yes", "no"],
            },
            match: null,
        };
};
var answerQuestion9 = function (answer) {
    if (answer === "yes")
        return {
            question: null,
            match: {
                name: "Feijoa tree",
                description: "King of fruits, fruit of kings! Feijoas are the best fruit.",
            },
        };
    // if (answer === "no")
    else
        return {
            question: null,
            match: {
                name: "Apple tree",
                description: "The most basic and popular fruit tree!",
            },
        };
};
var answerQuestion10 = function (answer) {
    if (answer === "yes")
        return {
            question: {
                step_id: 11,
                question: "How many pigs do you own?",
                answers: ["none", "some", "heaps"],
            },
            match: null,
        };
    // if (answer === "no")
    else
        return {
            question: {
                step_id: 12,
                question: "Is there a river on your property?",
                answers: ["yes", "no"],
            },
            match: null,
        };
};
var answerQuestion11 = function (answer) {
    if (answer === "none")
        return {
            question: null,
            match: {
                name: "Walnut tree",
                description: "A nut shaped like a miniature brain grows from this tree!",
            },
        };
    if (answer === "some")
        return {
            question: null,
            match: {
                name: "Hazel",
                description: "Used for nutella and salads, and even known to habour truffles on the roots!",
            },
        };
    // if (answer === "heaps")
    else
        return {
            question: null,
            match: {
                name: "Oak",
                description: "The acorns are a tasty treat for pigs, and truffles can be grown on the roots!",
            },
        };
};
var answerQuestion12 = function (answer) {
    if (answer === "yes")
        return {
            question: null,
            match: {
                name: "Willow",
                description: "A mysterious tree that loves water, mist, and witches.",
            },
        };
    // if (answer === "no")
    else
        return {
            question: null,
            match: {
                name: "Birch",
                description: "A bland pretty tree, suitable for someone who says no to everything!",
            },
        };
};
var answerQuestion = function (req, res, next) {
    var _a = req.body, step_id = _a.step_id, answer = _a.answer;
    switch (step_id) {
        case 1:
            return res.send(answerQuestion1(answer));
        case 2:
            return res.send(answerQuestion2(answer));
        case 3:
            return res.send(answerQuestion3(answer));
        case 4:
            return res.send(answerQuestion4(answer));
        case 5:
            return res.send(answerQuestion5(answer));
        case 6:
            return res.send(answerQuestion6(answer));
        case 7:
            return res.send(answerQuestion7(answer));
        case 8:
            return res.send(answerQuestion8(answer));
        case 9:
            return res.send(answerQuestion9(answer));
        case 10:
            return res.send(answerQuestion10(answer));
        case 11:
            return res.send(answerQuestion11(answer));
        case 12:
            return res.send(answerQuestion12(answer));
    }
};
exports.answerQuestion = answerQuestion;
