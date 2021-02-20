import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Main from "./pages/Main";
import Home from "./pages/Home";
import OutsiderNext from "./pages/OutsiderNext";
import OutsiderStudy from "./pages/OutsiderStudy";
import OutsiderCreativity from "./pages/OutsiderCreativity";
import InsiderNext from "./pages/InsiderNext";
import InsiderStudy from "./pages/InsiderStudy";
import InsiderCreativity from "./pages/InsiderCreativity";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/start" component={Home} />
        <Route exact path="/outsidernext" component={OutsiderNext} />
        <Route exact path="/outsiderstudy" component={OutsiderStudy} />
        <Route exact path="/outsidercreativity" component={OutsiderCreativity} />
        <Route exact path="/insidernext" component={InsiderNext} />
        <Route exact path="/insiderstudy" component={InsiderStudy} />
        <Route exact path="/insidercreativity" component={InsiderCreativity} />
      </Switch>
    </Router>
  );
}

export default App;
