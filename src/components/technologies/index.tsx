import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import Titles from "../titles";
import EachTechnology from "../eachTechnology";

export const Technologies = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.divSort}>
        <Titles title="Technologies" color="White" />
      </div>
      <div className={classes.divSort}>
        <EachTechnology/>
      </div>
    </div>
  );
};

export const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: `${Colors.Black}`,
    zIndex: 1,
  },
  divSort: {
    display: "flex",
    width: "60%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    "@media (max-width: 1024px)": {
      width: "90%",
    },
  },
});

export default Technologies;
