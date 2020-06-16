import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Order from "./Order";

describe("Order component", () => {
  it("shows order page on load", () => {
    const { getByText } = render(<Order />);
    expect(getByText("Your order")).toBeInTheDocument();
  });

  it("shows delivery info page as 2nd page and goes back to 1st page", () => {
    const { getByText } = render(<Order />);
    
    fireEvent.click(getByText("Two more steps"));

    expect(getByText("Delivery information")).toBeInTheDocument();

    fireEvent.click(getByText("< Back"))

    expect(getByText("Your order")).toBeInTheDocument();
  });

  it("shows place order page as 3rd page", () => {
    const { getByText } = render(<Order />);
    
    fireEvent.click(getByText("Two more steps"));
    fireEvent.click(getByText("One more step"));

    expect(getByText("Order")).toBeInTheDocument();

    fireEvent.click(getByText("< Back"))

    expect(getByText("Delivery information")).toBeInTheDocument();
  });

  it("shows order confirmation as 4th page", () => {
    const { getByText } = render(<Order />);
    
    fireEvent.click(getByText("Two more steps"));
    fireEvent.click(getByText("One more step"));
    fireEvent.click(getByText("Place order"));

    expect(getByText("Order confirmation")).toBeInTheDocument();

    fireEvent.click(getByText("< Back"))

    expect(getByText("Order")).toBeInTheDocument();
  });

  it("changes total and subtotal when quantity is changed to 2", () => {
    const { getByTestId } = render(<Order />);
    fireEvent.change(getByTestId("quantity"), {target: {value: "2"}});
    expect(getByTestId("subtotal").textContent).toBe("330");
    expect(getByTestId("delivery-fee").textContent).toBe("0");
    expect(getByTestId("subtotal").textContent).toBe("330");
  });

  it("changes total and subtotal when quantity is changed to 3", () => {
    const { getByTestId, getByText } = render(<Order />);
    fireEvent.change(getByTestId("quantity"), {target: {value: "3"}});
    expect(getByTestId("subtotal").textContent).toBe("495");
    expect(getByTestId("delivery-fee").textContent).toBe("0");
    expect(getByTestId("subtotal").textContent).toBe("495");

    fireEvent.click(getByText("Two more steps"));
    fireEvent.click(getByText("One more step"));
    fireEvent.click(getByText("Place order"));

    expect(getByTestId("subtotal").textContent).toBe("495");
    expect(getByTestId("delivery-fee").textContent).toBe("0");
    expect(getByTestId("subtotal").textContent).toBe("495");
  });
});
