export const beginQuiz = (req, res, next) => {
  res.send({
    question: {
      step_id: 1,
      question: "Do you have a courtyard, garden, or a farm?",
      answers: ["courtyard", "garden", "farm"],
    },
    match: null,
  });
};
