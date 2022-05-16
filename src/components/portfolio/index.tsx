import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import Titles from "../titles";
import { projects } from "./projects";
import EachProject from "../eachProject";

export const Portfolio = (props: any) => {
  const classes = useStyles();

  return (
    <div 
    id="Portfolio"
    className={classes.root}>
      <div className={classes.divSort}>
        <Titles title="Portfolio" color="Black" />
      </div>
      <div className={classes.divSort}>
        <EachProject projects={projects} />
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
    backgroundColor: `${Colors.White}`,
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

export default Portfolio;
