import * as React from "react";
import { Colors } from "../../colors/colors";
import { makeStyles } from "@mui/styles";

const LoadingComponent = (props: any) => {
  const classes = useStyles();

  let first = "{";

  let second = "}";

  return (
    <div className={classes.root}>
      <div className={classes.Loader}>
        <span>{first}</span>
        <span>{second}</span>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "fit-content",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: `${Colors.Black}`,
    zIndex: 1,
  },
  Loader: {
    marginTop: "50vh",
    color: `${Colors.Red}`,
    fontFamily: ["Aldrich", "sans-serif"].join(","),
    fontWeight: 900,
    fontSize: "20vh",
    opacity: 0.8,
    "& span": {
      display: "inline-block",
      animation: `$pulse 1s alternate infinite ease-in-out`,
      "& nth-child(odd)": {
        animationDelay: "1s",
      },
    },
  },
  "@keyframes pulse": {
    to: {
      transform: "scale(0.8) ",
      opacity: "0.5 ",
    },
  },
});

export default LoadingComponent;
