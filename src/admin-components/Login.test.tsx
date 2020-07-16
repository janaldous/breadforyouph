import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Login from "./Login";
import LoginApi from "../api/LoginApi";
import { mocked } from "ts-jest/utils";
import ReactTestUtils from "react-dom/test-utils";

describe("Login", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("smoke test", async () => {
    render(<Login />);
  });

  it("calls api when username and password is correct", async () => {
    const mockPromise = Promise.resolve({});
    LoginApi.login = jest.fn().mockReturnValue(mockPromise);

    const history = createMemoryHistory();

    const { getByLabelText, getByText } = render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const usernameField = getByLabelText("Username") as HTMLInputElement;
    usernameField.value = "username";
    ReactTestUtils.Simulate.change(usernameField);

    fireEvent.input(getByLabelText("Password"), {
      target: { value: "password" },
    });

    expect(getByLabelText("Username")).toBeInTheDocument();
    expect((getByLabelText("Username") as HTMLInputElement).value).toBe(
      "username"
    );
    expect((getByLabelText("Password") as HTMLInputElement).value).toBe(
      "password"
    );

    fireEvent.click(getByText("Submit"));

    const mockedApiDelivery = mocked(LoginApi.login, true);
    await wait(() => {
      expect(mockedApiDelivery.mock.calls.length).toBe(1);
    });

    expect(LoginApi.login).toBeCalledWith("username", "password");

    expect(history.location.pathname).toBe("admin/orders");
  });

  it("shows error when username and password is incorrect", async () => {
    const mockPromise = Promise.reject({});
    LoginApi.login = jest.fn().mockReturnValue(mockPromise);

    const history = createMemoryHistory();

    const { getByLabelText, getByText } = render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const usernameField = getByLabelText("Username") as HTMLInputElement;
    usernameField.value = "username";
    ReactTestUtils.Simulate.change(usernameField);

    fireEvent.input(getByLabelText("Password"), {
      target: { value: "wrongpassword" },
    });

    expect(getByLabelText("Username")).toBeInTheDocument();
    expect((getByLabelText("Username") as HTMLInputElement).value).toBe(
      "username"
    );
    expect((getByLabelText("Password") as HTMLInputElement).value).toBe(
      "wrongpassword"
    );

    fireEvent.click(getByText("Submit"));

    const mockedApiDelivery = mocked(LoginApi.login, true);
    await wait(() => {
      expect(mockedApiDelivery.mock.calls.length).toBe(1);
    });

    expect(LoginApi.login).toBeCalledWith("username", "wrongpassword");

    expect(getByText("Incorrect username and password combination")).toBeInTheDocument();
  });
});
