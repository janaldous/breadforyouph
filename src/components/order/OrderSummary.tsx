import React from "react";
import "./Order.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OrderComponentProps } from "./OrderModel";

const OrderSummary: React.FC<OrderComponentProps> = (props) => {
  return (
    <section id="order">
      <div className="row justify-content-center">
        <div className="description">
          <div className="bold-title">Order</div>
          <div className="products">
            <Row>
              <Col xs={9}>1 Original Banana Bread</Col>
              <Col xs={3}>₱200</Col>
            </Row>
          </div>
          <div className="line-separator"></div>
          <div className="subtotal">
            <Row>
              <Col xs={9}>Subtotal</Col>
              <Col xs={3}>₱200</Col>
            </Row>
            <Row>
              <Col xs={9}>Delivery fee</Col>
              <Col xs={3}>₱0</Col>
            </Row>
          </div>
          <div className="line-separator"></div>
          <div className="total">
            <Row>
              <Col xs={9}>
                <b>Total</b>
              </Col>
              <Col xs={3}>
                <b>₱200</b>
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
