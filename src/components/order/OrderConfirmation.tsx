import React from "react";
import "../../breadforyouph.scss";
import instagramLogo from "../../icons8-instagram-96.png";
import { OrderComponentProps } from "./OrderModel";

const OrderConfirmation: React.FC<OrderComponentProps> = (props) => {
  return (
    <div className="app-container">
      <section id="order">
        <div className="row">
          <div className="section-title center">Order</div>
        </div>
        <div className="row justify-content-center">
          <div className="description">
            Success! Your order number is ... Expect the delivery at...
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-item">breadforyouph</div>
        <div className="footer-item">
          <a href="https://www.instagram.com/breadforyouph/">
            <picture>
              <img
                className="instagram-icon"
                srcSet={instagramLogo}
                alt="Instagram link"
              />
            </picture>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default OrderConfirmation;
