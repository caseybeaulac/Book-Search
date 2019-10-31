import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/savebook";
import SearchBooks from "./pages/searchbook";
import NoMatch from "./pages/nobook";
import Nav from "./components/nav";
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;