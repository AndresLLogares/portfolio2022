import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";

const Titles = (props: any) => {
  const classes = useStyles();

  return (
    <h1
      className={props.color === "White" ? classes.titleWhite : classes.title}
    >
      {props.title}
    </h1>
  );
};

const useStyles = makeStyles({
  title: {
    margin: 0,
    marginTop: "4vh",
    marginBottom: "4vh",
    fontFamily: ["Aldrich", "sans-serif"].join(","),
    fontSize: "5vh",
    color: `${Colors.Black}`,
    "@media (max-width: 1024px)": {
      fontSize: "4vh",
    },
  },
  titleWhite: {
    margin: 0,
    marginTop: "4vh",
    marginBottom: "4vh",
    fontFamily: ["Trispace", "sans-serif"].join(","),
    fontSize: "5vh",
    color: `${Colors.White}`,
    "@media (max-width: 1024px)": {
      fontSize: "4vh",
    },
  },
});

export default Titles;
