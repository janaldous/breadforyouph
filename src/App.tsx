import React from "react";
import "./breadforyouph.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Order from "./components/order/Order";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
