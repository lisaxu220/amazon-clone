import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className='app'>
        {/* outside Switch, always gets rendered */}
        <Header />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          {/* default route always at the bottom */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
