import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import * as standardColors from "../../utilities/standard-colors";
import css from "./Match.module.css";
import PropTypes from "prop-types";

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

const Match = ({ data, setShownSection }) => {
  const classes = useStyles();
  return (
    <div className={css.Match}>
      <h1>Match found!</h1>
      <h2
        className={css.match_text}
      >{`You should plant a ${data.match.name}. ${data.match.description}`}</h2>
      <Button
        variant="contained"
        onClick={() => setShownSection("question")}
        className={classes.button}
      >
        Restart
      </Button>
    </div>
  );
};

Match.propTypes = {
  data: PropTypes.object,
  setShownSection: PropTypes.func,
};

export default Match;
