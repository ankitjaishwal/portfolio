import "./App.css";

import Homepage from "./Components/Homepage/Homepage";
import Profile from "./Components/Profile/Profile";
import Projects from "./Components/Projects/Projects";
import Certifications from "./Components/Certifications/Certifications";
import News from "./Components/News/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/certifications">
            <Certifications />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
