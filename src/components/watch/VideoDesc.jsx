import React, { useState } from "react";
import Linkify from "react-linkify";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  button: {
    textTransform: "none",
  },
}));

export default function VideoDesc({ isDark, description }) {
  const classes = useStyles();

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      {visible ? (
        <Linkify>
          <Typography
            variant="body1"
            className={
              classes.typography + (isDark ? " linkDark" : " linkLight")
            }
          >
            {description}
          </Typography>
        </Linkify>
      ) : null}
      <div className={classes.buttonContainer}>
        <Button
          color="primary"
          variant="outlined"
          onClick={handleClick}
          className={classes.button}
        >
          {visible ? "Hide" : "Show"} Description
        </Button>
      </div>
    </>
  );
}
