import React, { Component } from "react";
import Header from "../src/components/Header";
import Vote from './Vote';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/vote" component={Vote}/>
      </div>
      </Router>
    );
  }
}

export default App;
