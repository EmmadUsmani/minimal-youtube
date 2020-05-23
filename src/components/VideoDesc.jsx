import React, { useState } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import Linkify from "react-linkify";

const useStyles = makeStyles((theme) => ({
  typography: {
    marginTop: 20,
    whiteSpace: "pre-line",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function VideoDesc({ description }) {
  const classes = useStyles();

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      {visible ? (
        <Linkify>
          <Typography variant="body1" className={classes.typography}>
            {description}
          </Typography>
        </Linkify>
      ) : null}
      <div className={classes.buttonContainer}>
        <Button
          color="primary"
          variant="outlined"
          onClick={handleClick}
          style={{ textTransform: "none" }}
        >
          {visible ? "Hide" : "Show"} Description
        </Button>
      </div>
    </>
  );
}
