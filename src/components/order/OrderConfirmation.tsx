import React from "react";
import "../../breadforyouph.scss";
import instagramLogo from "../../icons8-instagram-96.png";
import { OrderComponentProps } from "./OrderModel";

const OrderConfirmation: React.FC<OrderComponentProps> = (props) => {
  return (
    <div className="app-container">
      <section id="order">
        <div className="row">
          <div className="section-title center">Confirmed</div>
        </div>
        <div className="row justify-content-center">
          <div className="description">Order confirmation</div>
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
