import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("smoke test", () => {
  const { getByText } = render(<App />);
});
