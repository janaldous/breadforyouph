import React from "react";
import OrderInfo from "./OrderInfo";
import DeliveryInfo from "./DeliveryInfo";
import OrderConfirmation from "./OrderConfirmation";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.jpg";
import OrderSummary from "./OrderSummary";
import { OrderData } from "./OrderModel";

export default function Order() {
  const [step, setStep] = React.useState<number>(0);
  const [data, setData] = React.useState<OrderData>({
    quantity: 1,
    subtotal: 165,
    deliveryFee: 0,
    total: 165,
    price: 165,
  });

  const handleNext = () => {
    setStep((oldStep) => oldStep + 1);
  };

  const handlePrev = () => {
    setStep((oldStep) => oldStep - 1);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const subtotal = value * data.price;
    setData((oldData) => ({ ...oldData, total: subtotal, subtotal }));
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
        return <DeliveryInfo onNext={handleNext} />;
      case 2:
        return <OrderSummary onNext={handleNext} data={data} />;
      case 3:
        return <OrderConfirmation />;
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
