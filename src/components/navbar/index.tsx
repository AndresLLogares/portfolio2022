import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import { AppBar, Toolbar } from "@mui/material";
import useScroll from "../../hooks/scroll";
import useWindowSize from "../../hooks/screen";
import DropDown from "./dropDown";
import Logo from "../../assets/images/logo.svg";
import { Menu } from "@styled-icons/entypo/Menu";
import { Close } from "@styled-icons/evil/Close";
const Navbar = () => {
  const classes = useStyles();

  const scroll = useScroll();

  const [dropOpen, setDropOpen] = React.useState(false);

  const [fixDrop, setFixDrop] = React.useState(false);

  const { width } = useWindowSize();

  const handleDrop = () => {
    setDropOpen(!dropOpen);
    setFixDrop(!fixDrop);
  };

  React.useEffect(() => {
    if (width < 1024) {
      setDropOpen(false);
      setFixDrop(false);
    }
  }, [width]);

  return (
    <AppBar className={scroll === 0 ? classes.transparent : classes.appBar}>
      {width > 1200 ? (
        <Toolbar className={classes.toolbar}>
          <a className={classes.button}
            rel="noreferrer"
            href="#Home"
          >
            Home
          </a>
          <a className={classes.button}
            rel="noreferrer"
            href="#Portfolio"
          >
            Portfolio
          </a>
          <a className={classes.button}
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1jkP_jCG66JDquoF5S_2Xm7YdkRo0C2gz/view?usp=sharing"
          >
            Resume
          </a>
        </Toolbar>) :
        (
          <Toolbar className={classes.toolbarResponsive}>
            <a className={classes.logo}
              rel="noreferrer"
              href="#Home"
            >
              <img src={Logo} alt="logo" className={classes.logoIcon} />
            </a>
            {fixDrop ? (
              <button
                onClick={handleDrop}
                className={classes.button}
              >
                <Close className={classes.logoIcon} />
              </button>
            ) : (
              <button
                onClick={handleDrop}
                className={classes.button}>
                <Menu className={classes.logoIcon} onClick={handleDrop} />
              </button>
            )}
          </Toolbar>
        )}
      {width > 1200 ? (
        null) : (
        <DropDown dropOpen={dropOpen} />
      )}
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
  },
  toolbarResponsive: {
    display: "flex",
    width: "95%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "10vw",
    marginLeft: "1vw",
    marginRight: "1vw",
    height: "100%",
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    color: `${Colors.Black} !important`,
    fontSize: "30px",
    fontWeight: "bold",
    textDecoration: "none",
    backgroundColor: "transparent !important",
    border: "none !important",
    transitionDuration: "1s",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: `${Colors.Blue} !important`,
      color: `${Colors.Black} !important`,
    },
  },
  link: {
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    color: `${Colors.Black} !important`,
    fontSize: "30px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    height: "100%",
  },
  logoIcon: {
    width: "3rem",
    height: "3rem",
    color: `${Colors.Black} !important`,
    borderRadius: "10px",
  },
});

export default Navbar;
