import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Show from "./Show";
import index from "./index";
import Create from "./Create";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">React Express App</a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/Create"} className="nav-link">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Show"} className="nav-link">
                    List
                  </Link>
                </li>
              </ul>
              <hr />
            </div>
          </nav>
          <br />
          <Switch>
            <Route exact path="/Create" component={Create} />
            <Route path="/Show" component={Show} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
