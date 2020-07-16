import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import Login from "./Login";
import LoginApi from "api/LoginApi";
import { mocked } from "ts-jest/utils";
import ReactTestUtils from "react-dom/test-utils";

describe("Login", () => {
  const mockPromise = Promise.resolve({});
  LoginApi.login = jest.fn().mockReturnValue(mockPromise);

  it("smoke test", async () => {
    render(<Login />);

    await act(async () => {
      await mockPromise;
    });
  });

  it("calls api when entered correct username and password", async () => {
    const history = createMemoryHistory();

    const { getByLabelText, getByText } = render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const usernameField = (getByLabelText("Username") as HTMLInputElement);
    usernameField.value = "username";
    ReactTestUtils.Simulate.change(usernameField);

    fireEvent.input(getByLabelText("Password"), {
      target: { value: "password" },
    });

    expect(getByLabelText("Username")).toBeInTheDocument();
    expect((getByLabelText("Username") as HTMLInputElement).value).toBe("username");
    expect((getByLabelText("Password") as HTMLInputElement).value).toBe("password");

    fireEvent.click(getByText("Submit"));

    const mockedApiDelivery = mocked(LoginApi.login, true);
    await wait(() => {
      expect(mockedApiDelivery.mock.calls.length).toBe(1);
    });

    expect(LoginApi.login).toBeCalledWith("username", "password");

    expect(history.location.pathname).toBe("admin/orders");
  });

  it("shows error when entered incorrect username and password", async () => {
    const history = createMemoryHistory();

    const { getByLabelText, getByText } = render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const usernameField = (getByLabelText("Username") as HTMLInputElement);
    usernameField.value = "username";
    ReactTestUtils.Simulate.change(usernameField);

    fireEvent.input(getByLabelText("Password"), {
      target: { value: "wrongpassword" },
    });

    expect(getByLabelText("Username")).toBeInTheDocument();
    expect((getByLabelText("Username") as HTMLInputElement).value).toBe("username");
    expect((getByLabelText("Password") as HTMLInputElement).value).toBe("wrongpassword");

    fireEvent.click(getByText("Submit"));

    const mockedApiDelivery = mocked(LoginApi.login, true);
    await wait(() => {
      expect(mockedApiDelivery.mock.calls.length).toBe(1);
    });

    expect(LoginApi.login).toBeCalledWith("username", "wrongpassword");

    expect(history.location.pathname).not.toBe("admin/orders");
  });
});
