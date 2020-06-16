import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Order from "./Order";

describe("Order component", () => {
  it("shows order page on load", () => {
    const { getByText } = render(<Order />);
    expect(getByText("Your order")).toBeInTheDocument();
  });

  it("shows delivery info page as 2nd page", () => {
    const { getByText } = render(<Order />);
    
    fireEvent.click(getByText("One more step"));

    expect(getByText("Delivery information")).toBeInTheDocument();
  });

  it("shows confirmation page as 3rd page", () => {
    const { getByText } = render(<Order />);
    
    fireEvent.click(getByText("One more step"));
    fireEvent.click(getByText("Place order"));

    expect(getByText("Order confirmation")).toBeInTheDocument();
  });
});
