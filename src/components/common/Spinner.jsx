import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  circularProgress: {
    position: "absolute",
    top: "50%",
    bottom: "50%",
    left: "50%",
    right: "50%",
    marginLeft: -20,
    marginTop: -20,
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return <CircularProgress className={classes.circularProgress} />;
}
