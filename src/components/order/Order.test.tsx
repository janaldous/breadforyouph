import React from "react";
import {
  render,
  fireEvent,
  getByLabelText,
  RenderResult,
} from "@testing-library/react";
import Order from "./Order";
import "@testing-library/jest-dom/extend-expect";
import ReactTestUtils from "react-dom/test-utils";
import { DeliveryData } from "./OrderModel";

const fillInDeliveryFormDefault = (result: RenderResult) => {
  const defaultVaues: DeliveryData = {
    firstName: "John",
    lastName: "Doe",
    contactNumber: "0123456789",
    addressLine1: "street name",
    addressLine2: "village name",
    deliveryType: "meetup",
    paymentType: "gcash",
  };
  fillInDeliveryForm(defaultVaues, result);
};

const fillInDeliveryForm = (
  values: Partial<DeliveryData>,
  result: RenderResult
) => {
  const { container, getByPlaceholderText, getByLabelText } = result;
  fireEvent.change(getByPlaceholderText("First name"), {
    target: { value: values.firstName },
  });
  fireEvent.change(getByPlaceholderText("Last name"), {
    target: { value: values.lastName },
  });
  fireEvent.change(getByLabelText("contactNumber"), {
    target: { value: values.contactNumber },
  });

  const addressLine1Elem = container.querySelector("input[name=address-line1]");
  if (addressLine1Elem) {
    ReactTestUtils.Simulate.change(addressLine1Elem, {
      target: { value: values.addressLine1 },
    });
  }

  const addressLine2Elem = container.querySelector("input[name=address-line2]");
  if (addressLine2Elem) {
    ReactTestUtils.Simulate.change(addressLine2Elem, {
      target: { value: values.addressLine2 },
    });
  }

  const rbDelivery = container.querySelectorAll(
    "input[name=deliveryOption]"
  )[1];
  if (rbDelivery) {
    ReactTestUtils.Simulate.change(rbDelivery);
  }

  const rbPayment = container.querySelectorAll("input[name=paymentOption]")[1];
  if (rbPayment) {
    ReactTestUtils.Simulate.change(rbPayment);
  }
};

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
    const renderResult = render(<Order />);
    const { getByText } = renderResult;

    fireEvent.click(getByText("Two more steps"));

    fillInDeliveryFormDefault(renderResult);

    fireEvent.click(getByText("One more step"));

    expect(getByText("Order")).toBeInTheDocument();

    fireEvent.click(getByText("< Back"));

    expect(getByText("Delivery information")).toBeInTheDocument();
  });

  it("shows order confirmation as 4th page", () => {
    const renderResult = render(<Order />);
    const { getByText } = renderResult;

    fireEvent.click(getByText("Two more steps"));
    fillInDeliveryFormDefault(renderResult);
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
    const renderResult = render(<Order />);
    const { getByTestId, getByText } = renderResult;
    fireEvent.change(getByTestId("quantity"), { target: { value: "3" } });
    expect(getByTestId("subtotal").textContent).toBe("495");
    expect(getByTestId("total").textContent).toBe("495");
    expect(getByTestId("delivery-fee").textContent).toBe("0");

    fireEvent.click(getByText("Two more steps"));
    fillInDeliveryFormDefault(renderResult);
    fireEvent.click(getByText("One more step"));

    expect(getByTestId("subtotal").textContent).toBe("495");
    expect(getByTestId("delivery-fee").textContent).toBe("0");
    expect(getByTestId("total").textContent).toBe("495");
  });

  it("changes name and address when they are filled in", () => {
    const renderResult = render(<Order />);
    const { getByTestId, getByText } = renderResult;

    fireEvent.click(getByText("Two more steps"));

    fillInDeliveryFormDefault(renderResult);

    fireEvent.click(getByText("One more step"));
    expect(getByTestId("customer-name").textContent).toBe("John Doe");
    expect(getByTestId("contact-number").textContent).toBe("0123456789");
    expect(getByTestId("addressLine1").textContent).toBe("street name");
    expect(getByTestId("addressLine2").textContent).toBe("village name");
    expect(getByTestId("delivery-type").textContent).toBe(
      "We will meet up at:"
    );
    expect(getByTestId("payment-type").textContent).toContain(
      "Paying with GCash"
    );
  });

  it("does not let you continue when delivery form is not completed", () => {
    const renderResult = render(<Order />);
    const { getByTestId, getByText, getAllByText } = renderResult;

    fireEvent.click(getByText("Two more steps"));

    fillInDeliveryForm(
      {
        firstName: "John",
        lastName: "",
        contactNumber: "",
        addressLine1: "",
        addressLine2: "",
        deliveryType: undefined,
        paymentType: undefined,
      },
      renderResult
    );

    fireEvent.click(getByText("One more step"));

    expect(getAllByText("Required").length).toBe(4);
  });
});
