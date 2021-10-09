import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clock from "./components/Clock";
import Home from "./components/Home";
import Profile from "./components/Profile";
function App() {
  return (
    <Router>
      <Clock />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
