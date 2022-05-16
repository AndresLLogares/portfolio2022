import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../colors/colors";

const DropDown = (props: any) => {
    const classes = useStyles();

    return (
        <div className={props.dropOpen ? classes.root : classes.rootNone}>
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
        </div>

    )
}

const useStyles = makeStyles({
    "@keyframes bounceOutLeft": {
        "0%": {
            transform: "translateX(0)"
        },
        "20%": {
            opacity: 1,
            transform: "translateX(20px)",
        },
        "100%": {
            opacity: 0,
            transform: "translateX(-2000px)"
        },
    },

    "@keyframes bounceInLeft": {
        "0%": {
            opacity: 0,
            transform: "translateX(-2000px)"
        },
        "60%": {
            opacity: 1,
            transform: "translateX(30px)",
        },
        "80%": {
            transform: 'translateX(-10px)',
        },
        "100%": {
            transform: "translateX(0)"
        },
    },
    root: {
        display: "flex",
        flexDirection: "column",
        position: 'absolute',
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        height: "fit-content",
        top: "10vh",
        backgroundColor: `${Colors.White} !important`,
        border: `3px solid ${Colors.Blue} !important`,
        boxShadow: "none",
        zIndex: 2,
        animationDuration: "1s",
        animationName: "$bounceInLeft",
        paddingTop: "3vh",
    },
    rootNone: {
        display: "none",
        flexDirection: "column",
        position: 'absolute',
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        height: "fit-content",
        top: "10vh",
        backgroundColor: `${Colors.White} !important`,
        border: `3px solid ${Colors.Blue} !important`,
        boxShadow: "none",
        zIndex: 2,
        animationDuration: "1s",
        animationName: "$bounceOutLeft",
        paddingTop: "3vh",
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: "1vh",
        paddingBottom: "1vh",
        marginLeft: "1vw",
        marginRight: "1vw",
        marginBottom: "3vh",
        height: "100%",
        fontFamily: ["IBM Plex Sans Thai Looped", "sans-serif"].join(","),
        color: `${Colors.Black} !important`,
        fontSize: "2vh",
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
})
export default DropDown;