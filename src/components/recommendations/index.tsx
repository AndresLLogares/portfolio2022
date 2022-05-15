import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import EachRecommendation from "../eachRecommendation";
import Titles from "../titles";
import { Carlos } from "./list";

export const Recommendations = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.divSort}>
        <Titles title="Recommendations" color="White" />
      </div>
      <div className={classes.divSort}>
        <EachRecommendation recommendation={Carlos} />
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
    minHeight: "100vh",
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
  },
});

export default Recommendations;
