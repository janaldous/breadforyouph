import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "useAuth";

function LoginRoute({ component: Component, ...rest }) {
  const { authorized } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authorized ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default LoginRoute;
