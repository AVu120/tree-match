const answerQuestion1 = (answer: string) => {
  if (answer === "courtyard")
    return {
      question: {
        step_id: 2,
        question: "Do you like cooking?",
        answers: ["yes", "no"],
      },
      match: null,
    };
  console.log("HI");
  if (answer === "garden")
    return {
      question: {
        step_id: 5,
        question: "Do you want a fruiting tree?",
        answers: ["yes", "no"],
      },
      match: null,
    };
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

export const answerQuestion = (req: any, res: any, next: any) => {
  const { step_id, answer } = req.body;
  switch (step_id) {
    case "1":
      return res.send(answerQuestion1(answer));
  }
};
