import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import { AppBar, Toolbar } from "@mui/material";
import scroll from "../../hooks/scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();

  const scrollNow = scroll();

  return (
    <AppBar className={scrollNow === 0 ? classes.transparent : classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <button className={classes.button}>
          <Link className={classes.link} to="/">
            Home
          </Link>
        </button>
        <button className={classes.button}>
          <Link className={classes.link} to="/about">
            Portfolio
          </Link>
        </button>
        <button className={classes.button}>
          <Link className={classes.link} to="/resume">
            Resume
          </Link>
        </button>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles({
  transparent: {
    display: "flex",
    backgroundColor: "transparent !important",
    height: "10vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none !important",
    borderBottom: `5px solid transparent !important`,
    transition: "background-color 1s ease",
    zIndex: 3,
  },
  appBar: {
    display: "flex",
    backgroundColor: `${Colors.White} !important`,
    height: "10vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundSize: "contain",
    boxShadow: "none !important",
    borderBottom: `3px solid ${Colors.Blue} !important`,
    transitionDuration: "1s",
    zIndex: 3,
  },
  toolbar: {
    display: "flex",
    width: "95%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      justifyContent: "center",
    },
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "10vw",
    marginLeft: "1vw",
    marginRight: "1vw",
    height: "100%",
    backgroundColor: "transparent !important",
    border: "none !important",
    transitionDuration: "1s",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: `${Colors.Blue} !important`,
      "& $link": {
        color: `${Colors.Black} !important`,
      },
    },
  },
  link: {
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    color: `${Colors.Black} !important`,
    fontSize: "30px",
    fontWeight: "bold",
    textDecoration: "none",
  },
});

export default Navbar;
