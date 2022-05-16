import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { Express } from "@styled-icons/simple-icons/Express";
import { Sequelize } from "@styled-icons/simple-icons/Sequelize";
import { Apollographql } from "@styled-icons/simple-icons/Apollographql";
import { Graphql } from "@styled-icons/simple-icons/Graphql";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Scrumalliance } from "@styled-icons/simple-icons/Scrumalliance";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Ethereum } from "@styled-icons/fa-brands/Ethereum";
import { Gatsby } from "@styled-icons/remix-fill/Gatsby";
import { Blockchaindotcom } from "@styled-icons/simple-icons/Blockchaindotcom";
import { Materialui } from "@styled-icons/simple-icons/Materialui";
import { HardHat } from "@styled-icons/fa-solid/HardHat";
import { Solidity } from "@styled-icons/simple-icons/Solidity";

const EachTechnology = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://es.reactjs.org/"
          className={classes.button}
        >
          React
          <LogoReact className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.javascript.com/"
          className={classes.button}
        >
          Javascript
          <Javascript className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://es.redux.js.org/"
          className={classes.button}
        >
          Redux
          <Redux className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://expressjs.com/"
          className={classes.button}
        >
          Express
          <Express className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://sequelize.org/"
          className={classes.button}
        >
          Sequelize
          <Sequelize className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://www.apollographql.com/"
          className={classes.button}
        >
          Apollo
          <Apollographql className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://graphql.org/"
          className={classes.button}
        >
          Graphql
          <Graphql className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://html.com/"
          className={classes.button}
        >
          Html
          <Html5 className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://www.w3.org/Style/CSS/Overview.en.html"
          className={classes.button}
        >
          CSS
          <Css3 className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://www.mongodb.com/"
          className={classes.button}
        >
          Mongo
          <Mongodb className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://nodejs.org/es/"
          className={classes.button}
        >
          Nodejs
          <Nodejs className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://www.scrumalliance.org/"
          className={classes.button}
        >
          Scrum
          <Scrumalliance className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://nextjs.org/"
          className={classes.button}
        >
          Nextjs
          <Nextdotjs className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://www.typescriptlang.org/"
          className={classes.button}
        >
          Typescript
          <Typescript className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://ethereum.org/en/"
          className={classes.button}
        >
          Ethereum
          <Ethereum className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://www.gatsbyjs.com/"
          className={classes.button}
        >
          Gatsby
          <Gatsby className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://www.blockchain.com/"
          className={classes.button}
        >
          Blockchain
          <Blockchaindotcom className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://mui.com/"
          className={classes.button}
        >
          MaterialUI
          <Materialui className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://hardhat.org/"
          className={classes.button}
        >
          HardHat
          <HardHat className={classes.logo} />
        </a>
        <a
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://solidity-es.readthedocs.io/es/latest/"
          className={classes.button}
        >
          Solidity
          <Solidity className={classes.logo} />
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
    color: `${Colors.Black}`,
    backgroundColor: `${Colors.White}`,
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
    color: `${Colors.Black}`,
  },
});

export default EachTechnology;
