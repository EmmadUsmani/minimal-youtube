import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import SearchBar from "./components/SearchBar";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 20,
    paddingBottom: 30,
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
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
