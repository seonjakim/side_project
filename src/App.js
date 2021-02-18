import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Main from "./pages/Main";
import Home from "./pages/Home";
import TestNext from "./pages/TestNext";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/start" component={Home} />
        <Route exact path="/next" component={TestNext} />
      </Switch>
    </Router>
  );
}

export default App;
