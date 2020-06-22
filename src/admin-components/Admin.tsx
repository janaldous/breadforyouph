import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import OrderAdmin from "./OrderAdmin";

const Admin: React.FC<{}> = () => {
  return (
    <Router basename="/admin">
      <Switch>
        <Route path="/orders">
          <OrderAdmin />
        </Route>
        <Route path="/">
          <Redirect to="/orders" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Admin;
