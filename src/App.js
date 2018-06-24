import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Search from "./components/pages/Search";
import Discover from "./components/pages/Discover";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/search" component={Search} />
      <Route path="/discover" component={Discover} />
    </div>
  </Router>
);

export default App;
