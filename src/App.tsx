import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./admin-components/Admin";
import Customer from "./customer-components/Customer";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Customer />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
