import React from "react";
import OrderInfo from "./OrderInfo";
import DeliveryInfo from "./DeliveryInfo";
import OrderConfirmation from "./OrderConfirmation";

export default function Order() {
  const [step, setStep] = React.useState(0);

  const handleNext = () => {
    setStep(oldStep => oldStep + 1);
  };

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
}
