import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import SearchBar from "./components/SearchBar";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Home from "./components/Home";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  content: {
    "margin-top": "10px",
    "margin-bottom": "10px",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <SearchBar />
      <div className={classes.content}>
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route path="/search" component={Search} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
