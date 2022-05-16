import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import { QuoteAltLeft } from "@styled-icons/boxicons-solid/QuoteAltLeft";
import { QuoteAltRight } from "@styled-icons/boxicons-solid/QuoteAltRight";

export const EachRecommendation = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.divName}>
        <a
          rel="noreferrer"
          target="_blank"
          href={props.recommendation.link}
          className={classes.name}
        >
          {props.recommendation.name}
        </a>
      </div>
      <div className={classes.divSort}>
        <div className={classes.divImage}>
          <img
            className={classes.image}
            src={props.recommendation.image}
            alt="recommendation"
          />
        </div>
        <div className={classes.divQuote}>
          <div className={classes.divQuoteLeft}>
            <QuoteAltLeft className={classes.quote} />
          </div>
          <div className={classes.divQuoteText}>
            <p className={classes.quoteText}>
              {props.recommendation.recommendation}
            </p>
          </div>
          <div className={classes.divQuoteRight}>
            <QuoteAltRight className={classes.quote} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "90%",
    flexDirection: "column",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      width: "100%",
    },
  },
  divName: {
    display: "flex",
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    "@media (max-width: 1024px)": {
      width: "100%",
    },
  },
  name: {
    textDecoration: "none",
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "4vh",
    fontWeight: "bold",
    color: `${Colors.White}`,
    margin: 0,
    "&:hover": {
      color: `${Colors.Red}`,
    },
  },
  divSort: {
    display: "flex",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2vh",
    marginBottom: "2vh",
    "@media (max-width: 1024px)": {
      width: "100%",
      flexDirection: "column",
    },
  },
  divImage: {
    display: "flex",
    width: "20%",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      width: "90%",
    },
  },
  image: {
    width: "11rem",
    height: "11rem",
    borderRadius: "10px",
    border: `3px solid`,
    borderColor: `${Colors.Red}`,
  },
  divQuote: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    marginLeft: "2rem",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    "@media (max-width: 1024px)": {
      width: "90%",
      margin: 0,
      marginTop: "2vh",
      marginBottom: "2vh",
    },
  },
  quote: {
    width: "2vw",
    height: "2vw",
    color: `${Colors.Red}`,
  },
  divQuoteLeft: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  divQuoteText: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  divQuoteRight: {
    display: "flex",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  quoteText: {
    display: "flex",
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "2.5vh",
    color: `${Colors.White}`,
    fontWeight: "bold",
  },
});

export default EachRecommendation;
