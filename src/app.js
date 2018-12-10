import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to React SSR!",
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </>
    );
  }
}

export default App;