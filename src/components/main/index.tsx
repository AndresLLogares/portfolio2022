import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import background from "../../assets/images/backgroundopacity.webp";
import { useTranslation } from "react-i18next";

const Main = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div
      id="Home"
      className={classes.root}>
      <div className={classes.background} />
      <div className={classes.content}>
        <h1 className={classes.title}>Andrés Luis Logares</h1>
        <h2 className={classes.subTitle}>Software Developer</h2>
      </div>
      <div className={classes.divAbout}>
        <p className={classes.textAbout}>
        {t("global:About.text")}
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
    "@media (max-width: 1024px)": {
      
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    marginTop: "15vh",
    textAlign: "center",
  },
  title: {
    margin: 0,
    marginBottom: "3vh",
    fontFamily: ["Aldrich", "sans-serif"].join(","),
    fontSize: "10vh",
    color: `${Colors.Black}`,
    animation: `$text-spacing  3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
    "@media (max-width: 1024px)": {
      fontSize: "4.5vh",
    },
  },
  subTitle: {
    margin: 0,
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "10vh",
    color: `${Colors.Black}`,
    animation: `$text-spacing  3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
    "@media (max-width: 1024px)": {
      fontSize: "4.5vh",
    },
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
    "@media (max-width: 1024px)": {
      textAlign: "center",
      width: "90%",
      marginTop: "7vh",
      marginBottom: "5vh",
    },
  },
  textAbout: {
    display: "flex",
    width: "100%",
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "3vh",
    fontWeight: "bold",
    "@media (max-width: 1024px)": {
      fontSize: "2.5vh",
    },
  },
});

export default Main;
