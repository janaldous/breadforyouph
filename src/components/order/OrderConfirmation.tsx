import React from "react";
import { OrderComponentProps } from "./OrderModel";

const OrderConfirmation: React.FC<OrderComponentProps> = (props) => {
  return (
    <div className="app-container">
      <section id="order">
        <div className="row justify-content-center">
          <div className="description">
            <div className="bold-title">Order confirmation</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="description">
            Success! Your order number is ... Expect the delivery at...
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderConfirmation;
