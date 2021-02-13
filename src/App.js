import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;