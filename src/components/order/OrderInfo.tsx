import React from "react";
import "../../breadforyouph.scss";
import Form from "react-bootstrap/Form";
import instagramLogo from "../../icons8-instagram-96.png";
import Button from "react-bootstrap/Button";
import { OrderComponentProps } from "./OrderModel";

const OrderInfo: React.FC<OrderComponentProps> = (props) => {
  return (
    <div className="app-container">
      <section id="order">
        <div className="row">
          <div className="section-title center">Order</div>
        </div>
        <div className="row justify-content-center">
          <div className="description">
            <div className="description">Order information</div>
            <Form>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control as="select">
                  {Array.from({ length: 6 }, (v, k) => k + 1).map((x) => (
                    <option key={`quantity-${x}`}>{x}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button
                variant="primary"
                className="w-100"
                onClick={props.onNext}
              >
                One more step
              </Button>
            </Form>
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

export default OrderInfo;
