import React from "react";
import "./Order.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OrderComponentProps } from "./OrderModel";

const OrderInfo: React.FC<OrderComponentProps> = (props) => {
  const MAX_ORDERS = 6;

  return (
      <section id="order">
        <div className="row justify-content-center">
          <div className="description">
            <div className="bold-title">Your order</div>
            <Form className="order-form">
              <Form.Group as={Row} controlId="formOrders">
                <Col xs={3}>
                  <Form.Control as="select">
                    {Array.from({ length: MAX_ORDERS }, (v, k) => k + 1).map(
                      (x) => (
                        <option key={`quantity-${x}`}>{x}</option>
                      )
                    )}
                  </Form.Control>
                </Col>
                <Form.Label column xs={6}>
                  Original Banana Bread
                </Form.Label>
                <Col xs={3}>₱165</Col>
              </Form.Group>
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
                Two more steps
              </Button>
            </Form>
          </div>
        </div>
      </section>
  );
};

export default OrderInfo;
