import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  textField: { "margin-top": 10 },
  input: { "padding-bottom": 7 },
}));

export default function SearchBar({ handleQueryChange }) {
  const classes = useStyles();
  const [input, setInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleQueryChange(input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={input || ""}
        onChange={handleChange}
        placeholder="Search Youtube..."
        variant="outlined"
        size="small"
        fullWidth={true}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" variant="outlined" onClick={handleSubmit}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        className={classes.textField}
        inputProps={{
          className: classes.input,
        }}
      />
    </form>
  );
}
