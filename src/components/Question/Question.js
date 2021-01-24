import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import * as standardColors from "../../utilities/standard-colors";
import css from "./Question.module.css";

const useStyles = makeStyles((theme) => ({
  button: {
    "& > *": {
      margin: 0,
      padding: "5px",
    },
    "&:hover": {
      backgroundColor: standardColors.LEAFY_GREEN,
    },
    backgroundColor: standardColors.DARK_GREEN,
    color: "white",
  },
}));

const Question = ({ data, setData }) => {
  const [questionCount, setQuestionCount] = useState(0);
  const classes = useStyles();
  const stepId = data.question?.step_id;
  const answers = data.question?.answers;
  const numberOfAnswers = data.question?.answers?.length;

  const answerQuestion = (step_id, answer) => {
    fetch(`${process.env.REACT_APP_BASE_API_URL}/answer`, {
      method: "post",
      body: JSON.stringify({ step_id, answer }),
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_API_URL}/begin`)
      .then((res) => res.json())
      .then((res) => setData(res));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!data.question) return;
    setQuestionCount((state) => state + 1);
  }, [stepId]);

  return (
    <div className={css.Questions}>
      <h1>{`Question ${questionCount}`}</h1>
      {data.question ? (
        <>
          <h2 className={css.question_text}>{data.question?.question}</h2>
          {numberOfAnswers < 5 ? (
            <div
              className={`${css.question_answers_row} ${
                numberOfAnswers === 4 ? css.question_answers_grid : ""
              }`}
            >
              {answers.map((answer, index) => (
                <Button
                  key={`Question ${questionCount} Answer ${index + 1}`}
                  variant="contained"
                  onClick={() => answerQuestion(stepId, answer)}
                  className={classes.button}
                >
                  {answer}
                </Button>
              ))}
            </div>
          ) : (
            <Select
              onChange={(event) => answerQuestion(stepId, event.target.value)}
              variant="outlined"
            >
              {answers.map((answer) => (
                <MenuItem value={answer}>{answer}</MenuItem>
              ))}
            </Select>
          )}
        </>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </div>
  );
};

export default Question;
