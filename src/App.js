import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Switch, Route, Redirect } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Home from "./components/Home";
import Footer from "./components/Footer";

const useStyles = makeStyles({
  content: {
    "margin-top": "10px",
    "margin-bottom": "10px",
  },
});

function App() {
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

export default App;
