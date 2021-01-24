import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import * as standardColors from "../../utilities/standard-colors";
import css from "./Introduction.module.css";

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

const Introduction = ({ setShownSection }) => {
  const classes = useStyles();
  return (
    <div className={css.Introduction}>
      <h1>Welcome to TreeMatch!</h1>
      <h2 className={css.introduction_text}>
        Click start below and we'll tell you what kind of tree you should plant
        in your garden.
      </h2>
      <Button
        variant="contained"
        onClick={() => setShownSection("question")}
        className={classes.button}
      >
        Start
      </Button>
    </div>
  );
};

export default Introduction;
