import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Books from "./Books";

import SavedBooks from "./SavedBooks";
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header/>
            <Switch>
              <Route exact path="/" component={Books} />
              <Route exact path="/savedbooks" component={SavedBooks} />
            </Switch>
          </div>
      </Router>
    );
  }
};


export default App;
