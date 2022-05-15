import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import Titles from "../titles";
import EachSocial from "../eachSocial";

export const ContactMe = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.divSort}>
        <Titles title="Contact Me" color="Black" />
      </div>
      <div className={classes.divSort}>
        <EachSocial />
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
    backgroundColor: `${Colors.White}`,
    zIndex: 1,
  },
  divSort: {
    display: "flex",
    width: "60%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default ContactMe;
