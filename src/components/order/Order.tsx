import React from "react";
import OrderInfo from "./OrderInfo";
import DeliveryInfo from "./DeliveryInfo";
import OrderConfirmation from "./OrderConfirmation";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.jpg";
import OrderSummary from "./OrderSummary";
import { OrderData, DeliveryData } from "./OrderModel";

const inputNameMapper = {
  "given-name": "firstName",
  "family-name": "lastName",
  phone: "contactNumber",
  "address-line1": "addressLine1",
  "address-line2": "addressLine2",
  deliveryOption: "deliveryType",
  paymentOption: "paymentType",
};

export default function Order() {
  const [step, setStep] = React.useState<number>(0);
  const [data, setData] = React.useState<OrderData>({
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
        deliveryType: "",
        paymentType: "",
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
      },
      isSubmitting: false,
    },
  });

  const handleNext = () => {
    setStep((oldStep) => oldStep + 1);
  };

  const handlePrev = () => {
    setStep((oldStep) => oldStep - 1);
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    // console.log(`${e.currentTarget.name}`)
    if (e.currentTarget.name === "quantity") {
      const subtotal = value * data.price;
      setData((oldData) => ({ ...oldData, total: subtotal, subtotal }));
    } else {
      let name = inputNameMapper[e.currentTarget.name] || e.currentTarget.name;
      // console.log(`changing ${name} to ${value} ${e.target.value}`)
      setData((oldData) => {
        const newData = {
          ...oldData,
          deliveryForm: {
            ...oldData.deliveryForm,
            formValues: { ...oldData.deliveryForm.formValues, [name]: value },
            formTouched: { ...oldData.deliveryForm.formTouched, [name]: true },
          },
        };
        const errors = validate(newData.deliveryForm.formValues);
        if (newData.deliveryForm.formTouched) {
          newData.deliveryForm.formErrors = {
            ...newData.deliveryForm.formErrors,
            [name]: errors[name],
          };
        }
        newData.deliveryForm.isSubmitting = Object.keys(errors).length === 0;
        return newData;
      });
    }
  };

  const handleSubmit = () => {
    const errors = validate(data.deliveryForm.formValues);
    setData((oldData) => {
      const newData = { ...oldData };
      newData.deliveryForm.formErrors = errors;
      return newData;
    });
    return Object.keys(errors).length === 0;
  };

  const validate = (values: DeliveryData) => {
    const errors: any = {};
    if (!values.firstName) errors.firstName = "Required";
    if (!values.lastName) errors.lastName = "Required";
    if (!values.contactNumber) errors.contactNumber = "Required";
    if (!values.addressLine1) errors.addressLine1 = "Required";
    if (!values.addressLine2) errors.addressLine2 = "Required";
    if (!values.addressLine2) errors.addressLine2 = "Required";
    if (!values.deliveryType) errors.deliveryType = "Required";
    if (!values.paymentType) errors.paymentType = "Required";

    return errors;
  };

  const getBackButton = (step: number) => {
    switch (step) {
      case 0:
        return <a href={"/"}>{"< Back to Home"}</a>;
      case 1:
      case 2:
        return (
          <div className="btn-back" onClick={handlePrev}>
            {"< Back"}
          </div>
        );
      case 3:
        return <div></div>;
      default:
        throw new Error("invalid step");
    }
  };

  const getContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <OrderInfo onNext={handleNext} data={data} onChange={handleChange} />
        );
      case 1:
        return (
          <DeliveryInfo
            onNext={handleNext}
            data={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        );
      case 2:
        return <OrderSummary onNext={handleNext} data={data} />;
      case 3:
        return <OrderConfirmation data={data} />;
      default:
        throw new Error("invalid step");
    }
  };

  return (
    <div className="order-container">
      <Navbar className="custom-navbar">
        <div className="flex-1-only">{getBackButton(step)}</div>
        <Navbar.Brand className="nav-brand" href="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <div className="flex-1-only"></div>
      </Navbar>
      <div className="content">{getContent(step)}</div>
    </div>
  );
}
