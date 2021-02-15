import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Home from "./Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;