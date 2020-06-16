import React from "react";
import OrderInfo from "./OrderInfo";
import DeliveryInfo from "./DeliveryInfo";
import OrderConfirmation from "./OrderConfirmation";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.jpg";
import { Link } from "react-router-dom";

export default function Order() {
  const [step, setStep] = React.useState(0);

  const handleNext = () => {
    setStep((oldStep) => oldStep + 1);
  };

  const getContent = (step: number) => {
    switch (step) {
      case 0:
        return <OrderInfo onNext={handleNext} />;
      case 1:
        return <DeliveryInfo onNext={handleNext} />;
      case 2:
        return <OrderConfirmation />;
      default:
        throw new Error("invalid step");
    }
  };

  return (
    <div className="order-container">
      <Navbar className="custom-navbar">
        <div className="flex-1-only"><Link to={"/"}>{"< Back to Home"}</Link></div>
        <Navbar.Brand className="nav-brand" href="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <div className="flex-1-only"></div>
      </Navbar>
      <div className="content">{getContent(step)}</div>
    </div>
  );
}
