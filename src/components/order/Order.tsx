import React from "react";
import OrderInfo from "./OrderInfo";
import DeliveryInfo from "./DeliveryInfo";
import OrderConfirmation from "./OrderConfirmation";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.jpg";
import OrderSummary from "./OrderSummary";

export default function Order() {
  const [step, setStep] = React.useState(0);

  const handleNext = () => {
    setStep((oldStep) => oldStep + 1);
  };

  const handlePrev = () => {
    setStep((oldStep) => oldStep - 1);
  };

  const getBackButton = (step: number) => {
    switch (step) {
      case 0:
        return <a href={"/"}>{"< Back to Home"}</a>;
      case 1:
      case 2:
      case 3:
        return <div className="btn-back" onClick={handlePrev}>{"< Back"}</div>;
      default:
        throw new Error("invalid step");
    }
  };

  const getContent = (step: number) => {
    switch (step) {
      case 0:
        return <OrderInfo onNext={handleNext} />;
      case 1:
        return <DeliveryInfo onNext={handleNext} onPrev={handlePrev} />;
      case 2:
        return <OrderSummary onNext={handleNext} />;
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
