import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "useAuth";

function PrivateRoute({ component: Component, ...rest }) {
  const { basicAuth } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        basicAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="login" />
        )
      }
    />
  );
}

export default PrivateRoute;
