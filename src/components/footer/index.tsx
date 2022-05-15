import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.footer}>
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          <p className={classes.text}>
            © 2022 Andres Luis Logares. All rights reserved
          </p>
        </a>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${Colors.Black}`,
    zIndex: 2,
  },
  footer: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5vh",
    marginBottom: "5vh",
  },
  image: {
    width: "4rem",
    height: "1rem",
  },
  text: {
    fontSize: "2vh",
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontWeight: "bold",
    color: `${Colors.White}`,
    "@media (max-width: 1024px)": {
      fontSize: "1.5vh",
    },
  },
});

export default Footer;
