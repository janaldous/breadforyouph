import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { OrderData } from "./OrderModel";
import { OrderConfirmationOrderStatusEnum, OrderDtoDeliveryTypeEnum } from "breadforyou-fetch-api";
import OrderApi from "../../api/OrderApi";
import DeliveryInfo from "./DeliveryInfo";

describe("Order component", () => {
  let orderResponsePromise = Promise.resolve({
    orderNumber: 1234,
    orderStatus: OrderConfirmationOrderStatusEnum.REGISTERED,
    user: {
      firstName: "John",
      lastName: "Doe",
      contactNumber: "0123456789",
    },
  });

  const data: OrderData = {
    quantity: 1,
    subtotal: 165,
    deliveryFee: 0,
    total: 165,
    price: 165,
    deliveryForm: {
      formValues: {
        firstName: "",
        lastName: "",
        contactNumber: "",
        addressLine1: "",
        addressLine2: "",
        city: "Sta. Rosa",
        deliveryType: undefined,
        paymentType: undefined,
      },
      formErrors: {},
      formTouched: {
        firstName: false,
        lastName: false,
        contactNumber: false,
        addressLine1: false,
        addressLine2: false,
        deliveryType: false,
        paymentType: false,
        city: false,
        specialInstructions: false,
      },
      isSubmitting: false,
    },
  };
  const onChangeMock = jest.fn();
  const onNextMock = jest.fn();

  beforeEach(() => {
    OrderApi.postOrder = jest.fn(() => orderResponsePromise);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("smoke test", () => {
    render(
      <DeliveryInfo data={data} onChange={onChangeMock} onNext={onNextMock} />
    );
  });

  it("shows all address fields when no delivery type is selected", () => {
    const { container, getByLabelText } = render(
      <DeliveryInfo data={data} onChange={onChangeMock} onNext={onNextMock} />
    );

    expect(getByLabelText("Address Line 1")).toBeInTheDocument();
    expect(getByLabelText("Address Line 2")).toBeInTheDocument();
    expect(getByLabelText("City")).toBeInTheDocument();
    expect(getByLabelText("Special Instructions")).toBeInTheDocument();
  });

  it("shows special instructions only when delivery type Meet up is selected", () => {
    data.deliveryForm.formValues = {
      ...data.deliveryForm.formValues,
      deliveryType: OrderDtoDeliveryTypeEnum.PICKUP,
    };

    const { queryByLabelText } = render(
      <DeliveryInfo data={data} onChange={onChangeMock} onNext={onNextMock} />
    );
    expect(queryByLabelText("Address Line 1")).not.toBeInTheDocument();
    expect(queryByLabelText("Address Line 2")).not.toBeInTheDocument();
    expect(queryByLabelText("City")).not.toBeInTheDocument();
    expect(queryByLabelText("Special Instructions")).toBeInTheDocument();
  });
});
