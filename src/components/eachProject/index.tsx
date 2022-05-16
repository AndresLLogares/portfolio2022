import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";
const EachProject = (props: any) => {
  const classes = useStyles();

  const peronsal = props.projects.filter((item: any) => {
    return item.type === "personal";
  });

  const work = props.projects.filter((item: any) => {
    return item.type !== "personal";
  });

  return (
    <div className={classes.root}>
      <div className={classes.divSubtitle}>
        <h1 className={classes.subtitle}>Personal Projects</h1>
      </div>
      <div className={classes.divWrap}>
        {peronsal?.map((item: any, index: number) => (
          <div key={item.id} className={classes.eachProject}>
            <div className={classes.divTitle}>
              <h3 className={classes.title}>{item.name}</h3>
            </div>
            <div className={classes.divImg}>
              <img className={classes.img} src={item.image} alt="img" />
            </div>
            <div className={classes.divDescription}>
              <p className={classes.description}>{item.description}</p>
            </div>
            <div className={classes.divLinks}>
              <a
                className={classes.links}
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className={classes.links}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.divSubtitle}>
        <h1 className={classes.subtitle}>Professional Projects</h1>
      </div>
      <div className={classes.divWrap}>
        {work?.map((item: any, index: number) => (
          <div key={item.id} className={classes.eachProject}>
            <div className={classes.divTitle}>
              <h3 className={classes.title}>{item.name}</h3>
            </div>
            <div className={classes.divImg}>
              <img className={classes.img} src={item.image} alt="img" />
            </div>
            <div className={classes.divDescription}>
              <p className={classes.description}>{item.description}</p>
            </div>
            <div className={classes.divLinks}>
              <a
                className={classes.links}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles({
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
  divSubtitle: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  subtitle: {
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "4vh",
    fontWeight: "bold",
    color: `${Colors.Black}`,
    margin: 0,
  },
  divWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "fit-content",
    flexWrap: "wrap",
    "@media (max-width: 1024px)": {
      width: "100%",
      flexDirection: "column",
      flexWrap: "nowrap",
    },
  },
  eachProject: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "40%",
    height: "fit-content",
    minHeight: "60vh",
    marginRight: "3rem",
    marginBottom: "3rem",
    backgroundColor: `${Colors.White}`,
    boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.5)",
    borderRadius: "10px",
    padding: "1rem",
    marginTop: "3rem",
    "@media (max-width: 1024px)": {
      width: "90%",
      marginRight: 0,
    },
  },
  divTitle: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: "3rem",
  },
  title: {
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "4vh",
    fontWeight: "bold",
    color: `${Colors.Black}`,
    margin: 0,
  },
  divImg: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "3rem",
  },
  img: {
    width: "8rem",
    height: "8rem",
    borderRadius: "10px",
  },
  divDescription: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "3rem",
  },
  description: {
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "2vh",
    fontWeight: "bold",
    color: `${Colors.Black}`,
    margin: 0,
  },
  divLinks: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  links: {
    textDecoration: "none",
    fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
    fontSize: "3vh",
    fontWeight: "bold",
    color: `${Colors.Black}`,
    margin: 0,
    transitionDuration: "1s",
    "&:hover": {
      color: `${Colors.Red}`,
    },
  },
});

export default EachProject;
