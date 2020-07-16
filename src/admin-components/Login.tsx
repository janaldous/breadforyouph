import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import LoginApi from "../api/LoginApi";
import { useAuth } from "useAuth";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();
  const { setAuthorized, setBasicAuth } = useAuth();

  const handleSubmit = () => {
    LoginApi.login(username, password).then(() => {
      setAuthorized(true);
      setBasicAuth(LoginApi.createBasicAuthToken(username, password));
      setUsername("");
      setPassword("");
      history.push("admin/orders");
    });
  };

  return (
    <div className="admin-login">
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="string"
            value={username}
            data-testid={"username"}
            onChange={(e: any) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            data-testid={"password"}
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
