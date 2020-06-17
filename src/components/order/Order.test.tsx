import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import Order from "./Order";
import "@testing-library/jest-dom/extend-expect";
import ReactTestUtils from "react-dom/test-utils";

describe("Order component", () => {
  it("shows order page on load", () => {
    const { getByText } = render(<Order />);
    expect(getByText("Your order")).toBeInTheDocument();
  });

  it("shows delivery info page as 2nd page and goes back to 1st page", () => {
    const { getByText } = render(<Order />);

    fireEvent.click(getByText("Two more steps"));

    expect(getByText("Delivery information")).toBeInTheDocument();

    fireEvent.click(getByText("< Back"));

    expect(getByText("Your order")).toBeInTheDocument();
  });

  it("shows place order page as 3rd page", () => {
    const { getByText } = render(<Order />);

    fireEvent.click(getByText("Two more steps"));
    fireEvent.click(getByText("One more step"));

    expect(getByText("Order")).toBeInTheDocument();

    fireEvent.click(getByText("< Back"));

    expect(getByText("Delivery information")).toBeInTheDocument();
  });

  it("shows order confirmation as 4th page", () => {
    const { getByText } = render(<Order />);

    fireEvent.click(getByText("Two more steps"));
    fireEvent.click(getByText("One more step"));
    fireEvent.click(getByText("Place order"));

    expect(getByText("Order confirmation")).toBeInTheDocument();
    // TODO expect < Back not found
  });

  it("changes total and subtotal when quantity is changed to 2", () => {
    const { getByTestId } = render(<Order />);
    fireEvent.change(getByTestId("quantity"), { target: { value: "2" } });
    expect(getByTestId("subtotal").textContent).toBe("330");
    expect(getByTestId("delivery-fee").textContent).toBe("0");
    expect(getByTestId("total").textContent).toBe("330");
  });

  it("changes total and subtotal when quantity is changed to 3", () => {
    const { getByTestId, getByText } = render(<Order />);
    fireEvent.change(getByTestId("quantity"), { target: { value: "3" } });
    expect(getByTestId("subtotal").textContent).toBe("495");
    expect(getByTestId("total").textContent).toBe("495");
    expect(getByTestId("delivery-fee").textContent).toBe("0");

    fireEvent.click(getByText("Two more steps"));
    fireEvent.click(getByText("One more step"));

    expect(getByTestId("subtotal").textContent).toBe("495");
    expect(getByTestId("delivery-fee").textContent).toBe("0");
    expect(getByTestId("total").textContent).toBe("495");
  });

  it("changes name and address when they are filled in", () => {
    const {
      getByTestId,
      getByText,
      getByPlaceholderText,
      getByLabelText,
      container,
    } = render(<Order />);

    fireEvent.click(getByText("Two more steps"));
    fireEvent.change(getByPlaceholderText("First name"), {
      target: { value: "John" },
    });
    fireEvent.change(getByPlaceholderText("Last name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(getByLabelText("contactNumber"), {
      target: { value: "0123456789" },
    });

    const addressLine1Elem = container.querySelector("input[name=address-line1]");
    if (addressLine1Elem) {
      ReactTestUtils.Simulate.change(addressLine1Elem, {
        target: { value: "street name" },
      });
    }

    const addressLine2Elem = container.querySelector("input[name=address-line2]");
    if (addressLine2Elem) {
      ReactTestUtils.Simulate.change(addressLine2Elem, {
        target: { value: "village name" },
      });
    }

    const rbDelivery = container.querySelectorAll("input[name=deliveryOption]")[1];
    if (rbDelivery) {
      ReactTestUtils.Simulate.change(rbDelivery);
    }

    const rbPayment = container.querySelectorAll("input[name=paymentOption]")[1];
    if (rbPayment) {
      ReactTestUtils.Simulate.change(rbPayment);
    }

    fireEvent.click(getByText("One more step"));
    expect(getByTestId("customer-name").textContent).toBe("John Doe");
    expect(getByTestId("contact-number").textContent).toBe("0123456789");
    expect(getByTestId("addressLine1").textContent).toBe("street name");
    expect(getByTestId("addressLine2").textContent).toBe("village name");
    expect(getByTestId("delivery-type").textContent).toBe("We will meet up at:");
    expect(getByTestId("payment-type").textContent).toContain("Paying with GCash");
  });
});
