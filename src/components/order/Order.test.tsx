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
    
    fireEvent.click(getByText("Two more steps"));

    expect(getByText("Delivery information")).toBeInTheDocument();
  });

  it("shows place order page as 3rd page", () => {
    const { getByText } = render(<Order />);
    
    fireEvent.click(getByText("Two more steps"));
    fireEvent.click(getByText("One more step"));

    expect(getByText("Order")).toBeInTheDocument();
  });

  it("shows order confirmation as 4th page", () => {
    const { getByText } = render(<Order />);
    
    fireEvent.click(getByText("Two more steps"));
    fireEvent.click(getByText("One more step"));
    fireEvent.click(getByText("Place order"));

    expect(getByText("Order confirmation")).toBeInTheDocument();
  });
});
