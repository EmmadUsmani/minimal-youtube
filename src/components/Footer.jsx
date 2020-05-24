import React from "react";
import { makeStyles } from "@material-ui/styles";
import { IconButton, Typography, Link } from "@material-ui/core";
import BrightnessHigh from "@material-ui/icons/BrightnessHigh";
import Brightness4 from "@material-ui/icons/Brightness4";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    textAlign: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 5,
    marginTop: 2,
  },
  link: {
    textDecoration: "none",
  },
}));

function Footer({ handleToggleDark, isDark }) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <IconButton onClick={handleToggleDark}>
        {isDark ? <BrightnessHigh /> : <Brightness4 />}
      </IconButton>
      <div className={classes.textContainer}>
        <Typography variant="body2">
          created by{" "}
          <Link
            href="https://github.com/emmadusmani"
            color="primary"
            className={classes.link}
          >
            Emmad Usmani
          </Link>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
