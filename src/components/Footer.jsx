import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  typography: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    textAlign: "center",
  },
  a: {
    color: "green",
    textDecoration: "none",
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <Typography
      variant="body2"
      component="footer"
      className={classes.typography}
    >
      created by{" "}
      <a href="https://github.com/emmadusmani" className={classes.a}>
        Emmad Usmani
      </a>
    </Typography>
  );
}

export default Footer;
