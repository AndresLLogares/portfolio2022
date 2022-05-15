import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import background from "../../assets/images/backgroundopacity.png";

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background} />
      <div className={classes.content}>
        <h1 className={classes.title}>Andrés Luis Logares</h1>
        <h2 className={classes.subTitle}>Software Developer</h2>
      </div>
    <div className={classes.divAbout}>
        <p className={classes.textAbout}>
          I am passionate about development, trying to improve my work and my
          skills every day, always with curiosity and impetus looking for
          solutions to the problems that arise and learning new things in this
          eternal path of study that is to be a developer, while also learning
          from my peers and helping other team members.
        </p>
      </div>    
    </div>
  );
};

const useStyles = makeStyles({
  "@keyframes bg-scrolling": {
    "0%": { transform: `translateY(0)` },
    "100%": { transform: `translateY(-10%)` },
  },
  "@keyframes text-pop-up-top": {
    "0%": {
      transform: `translateY(0)`,
      textShadow: `none`,
    },
    "100%": {
      transform: `translateY(-50px)`,
      textShadow: `0px 3px 0px #b2a98f,
      0px 14px 10px rgba(0,0,0,0.15),
      0px 24px 2px rgba(0,0,0,0.1),
      0px 34px 30px rgba(0,0,0,0.1);`,
    },
  },
  "@keyframes text-spacing": {
    "0%": {
      transform: "translateY(-600px) rotateX(-30deg) scale(0)",
      transformOrigin: "50% 100%",
      textShadow: `none`,
    },
    "100%": {
      transform: "translateY(0) rotateX(0) scale(1)",
      transformOrigin: "50% 1400px",
      textShadow: `0px 3px 0px #b2a98f,
      0px 14px 10px rgba(0,0,0,0.15),
      0px 24px 2px rgba(0,0,0,0.1),
      0px 34px 30px rgba(0,0,0,0.1);`,
    },
  },
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "fit-content",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${Colors.White}`,
  },
  Zoom: {
    display: "flex",
    width: "fit-content",
  },
  background: {
    width: "100%",
    height: "110vh",
    background: `url(${background})`,
    backgroundSize: "500px 500px",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    position: "absolute",
    animation: "$bg-scrolling 5s linear infinite",
    animationTimeline: "linear",
    zIndex: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    marginTop: "15vh",
  },
  title: {
    margin: 0,
    marginBottom: "3vh",
    fontFamily: ["Aldrich", "sans-serif"].join(","),
    fontSize: "10vh",
    color: `${Colors.Black}`,
    animation: `$text-spacing  3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
  },
  subTitle: {
    margin: 0,
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "10vh",
    color: `${Colors.Black}`,
    animation: `$text-spacing  3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
  },
  divAbout: {
    display: "flex",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    texAlign: "center",
    marginTop: "3vh",
    marginBottom: "3vh",
    backgroundColor: `${Colors.White}`,
    zIndex: 1,
    padding: "2vw",
    borderRadius: "10px",
    boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.5)",
  },
  textAbout: {
    display: "flex",
    width: "100%",
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "3vh",
    fontWeight: "bold",
  },
});

export default Main;
