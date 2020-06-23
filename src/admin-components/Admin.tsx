import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import OrderAdmin from "./OrderAdmin";
import "./Admin.scss";

const Admin: React.FC<{}> = () => {
  return (
    <div className="admin-container">
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
    </div>
  );
};

export default Admin;
