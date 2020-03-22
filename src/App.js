import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./view/Home";
import Quiz from "./view/Quiz";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" exact component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;
