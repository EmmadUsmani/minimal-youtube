import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route path="/search" component={Search} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
