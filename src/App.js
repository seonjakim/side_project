import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Main from "./pages/Main";
import FirstQuestion from "./pages/SurveyPages/FirstQuestion";
import OutsiderNext from "./pages/SurveyPages/OutsiderNext";
import OutsiderStudy from "./pages/SurveyPages/OutsiderStudy";
import OutsiderCreativity from "./pages/SurveyPages/OutsiderCreativity";
import InsiderNext from "./pages/SurveyPages/InsiderNext";
import InsiderStudy from "./pages/SurveyPages/InsiderStudy";
import InsiderCreativity from "./pages/SurveyPages/InsiderCreativity";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/start" component={FirstQuestion} />
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
