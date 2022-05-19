import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Phone } from "@styled-icons/boxicons-regular/Phone";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { Discord } from "@styled-icons/fa-brands/Discord";
import { TextDocument } from "@styled-icons/entypo/TextDocument";
import { useTranslation } from "react-i18next";

const EachSocial = (props: any) => {
  const classes = useStyles();
  const { t } = useTranslation("global");

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/"
          className={classes.button}
        >
          Linkedin
          <Linkedin className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/AndresLLogares"
          className={classes.button}
        >
          Github
          <Github className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://wa.me/5491136005563"
          className={classes.button}
        >
          {t("global:Social.Phone")}
          <Phone className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:andresl940@hotmail.com"
          className={classes.button}
        >
          Email
          <Email className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://discordapp.com/users/935290092338159626/"
          className={classes.button}
        >
          Discord
          <Discord className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1jkP_jCG66JDquoF5S_2Xm7YdkRo0C2gz/view?usp=sharing"
          className={classes.button}
        >
          {t("global:Social.Resume")}
          <TextDocument className={classes.logo} />
        </a>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "fit-content",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "fit-content",
    flexWrap: "wrap",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      flexWrap: "none",
    },
  },
  button: {
    display: "flex",
    marginRight: "5rem",
    marginBottom: "5rem",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textDecoration: "none",
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    width: "8rem",
    height: "8rem",
    borderRadius: "10px",
    color: `${Colors.White}`,
    backgroundColor: `${Colors.Black}`,
    boxShadow: `-5px 5px ${Colors.Red}, -4px 4px ${Colors.Red}, -2px 2px ${Colors.Red}`,
    border: `1px solid ${Colors.Red}`,
    transitionDuration: "1s",
    transform: "skewX(5deg)",
    "&:hover": {
      boxShadow: `none`,
      border: `none`,
      transform: "translate(20px, 20px)",
      cursor: "pointer",
    },
    "@media (max-width: 1024px)": {
      marginRight: "0rem",
      marginBottom: "3rem",
    },
  },
  logo: {
    width: "4rem",
    height: "4rem",
    color: `${Colors.White}`,
  },
});

export default EachSocial;
