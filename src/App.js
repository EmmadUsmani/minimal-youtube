import React from "react";
import { Grid } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid container>
      <Grid item xs={false} sm={2} className="gutter" />
      <Grid
        item
        container
        direction="column"
        xs={8}
        className="page"
        spacing={1}
        style={{ "min-height": "100vh", position: "relative" }}
      >
        <Grid item>
          <SearchBar />
        </Grid>
        <Grid item className="content">
          <Switch>
            <Route path="/watch" component={Watch} />
            <Route path="/search" component={Search} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Grid>
        <Grid item style={{ flex: 1 }}>
          <Footer />
        </Grid>
      </Grid>
      <Grid item xs={false} sm={2} className="gutter" />
    </Grid>
  );
}

export default App;
