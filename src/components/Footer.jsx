import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  typography: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.typography}>
      created by{" "}
      <Link
        href="https://github.com/emmadusmani"
        color="primary"
        className={classes.link}
      >
        Emmad Usmani
      </Link>
    </Typography>
  );
}

export default Footer;
