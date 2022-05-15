import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import Navbar from "../navbar"
const Layout = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Navbar/>
      {props.children}
    </div>
  );
};

const useStyles = makeStyles({
  main: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    minHeight: "100vh",
    backgroundColor: `${Colors.White}`,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default Layout;
