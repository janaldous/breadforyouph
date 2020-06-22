import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./home/Home";
import Order from "./order/Order";

const Customer: React.FC<{}> = () => {
  return (
    <Router >
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
};

export default Customer;
