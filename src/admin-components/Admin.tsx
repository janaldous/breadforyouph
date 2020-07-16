import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import OrderAdmin from "./OrderAdmin";
import "./Admin.scss";
import OrderDetail from "./OrderDetail";
import PrivateRoute from "PrivateRoute";
import Login from "./Login";
import LoginRoute from "admin-components/LoginRoute";

const Admin: React.FC<{}> = () => {
  return (
    <div className="admin-container">
      <Router basename="/admin">
        <Switch>
          <PrivateRoute exact path="/orders" component={OrderAdmin} />
          <PrivateRoute path="/orders/:id" component={OrderDetail} />
          <LoginRoute path="/login" component={Login} />
          <Route path="/">
            <Redirect to="/orders" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Admin;
