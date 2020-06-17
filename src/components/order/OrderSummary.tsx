import React from "react";
import "./Order.scss";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OrderComponentProps } from "./OrderModel";

const OrderSummary: React.FC<OrderComponentProps> = (props) => {
  return (
    <section id="order">
      <div className="row justify-content-center">
        <div className="description payment-information">
          <div className="customer-name" data-testid="customer-name">{`${props.data.firstName} ${props.data.lastName}`}</div>
          <div data-testid="contact-number">{props.data.contactNumber}</div>
          <div data-testid="delivery-type">Will be delivered at:</div>
          <div data-testid="address1">Main Street</div>
          <div data-testid="address1">Disneyland Village</div>
          <div data-testid="payment-type">Cash on Delivery</div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="description">
          <div className="bold-title">Order</div>
          <div className="products">
            <Row>
              <Col xs={9}>1 Original Banana Bread</Col>
              <Col xs={3}>₱<span data-testid="price">{props.data.price}</span></Col>
            </Row>
          </div>
          <div className="line-separator"></div>
          <div className="subtotal">
            <Row>
              <Col xs={9}>Subtotal</Col>
              <Col xs={3}>₱<span data-testid="subtotal">{props.data.subtotal}</span></Col>
            </Row>
            <Row>
              <Col xs={9}>Delivery fee</Col>
              <Col xs={3}>₱<span data-testid="delivery-fee">{props.data.deliveryFee}</span></Col>
            </Row>
          </div>
          <div className="line-separator"></div>
          <div className="total">
            <Row>
              <Col xs={9}>
                <b>Total</b>
              </Col>
              <Col xs={3}>
                <b>₱<span data-testid="total">{props.data.total}</span></b>
              </Col>
            </Row>
          </div>
          <Button
            variant="primary"
            className="btn-next w-100"
            onClick={props.onNext}
          >
            Place order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
