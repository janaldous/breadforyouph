import React from "react";
import "./Order.scss";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OrderComponentProps } from "./OrderModel";

const deliveryTypeMapper = {
  "meetup": "We will meet up at:",
  "deliver": "We will deliver to:",
};

const paymentTypeMapper = {
  "cash": "Cash on Delivery",
  "gcash": "Paying with GCash",
}

const OrderSummary: React.FC<OrderComponentProps> = (props) => {

  const formValues = props.data.deliveryForm.formValues;

  return (
    <section id="order">
      <div className="row justify-content-center">
        <div className="description payment-information">
          <div
            className="customer-name"
            data-testid="customer-name"
          >{`${formValues.firstName} ${formValues.lastName}`}</div>
          <div data-testid="contact-number">{formValues.contactNumber}</div>
          <div data-testid="delivery-type">
            {deliveryTypeMapper[formValues.deliveryType]}
          </div>
          <div data-testid="addressLine1">{formValues.addressLine1}</div>
          <div data-testid="addressLine2">{formValues.addressLine2}</div>
          <div data-testid="payment-type">{paymentTypeMapper[formValues.paymentType]}</div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="description">
          <div className="bold-title">Order</div>
          <div className="products">
            <Row>
              <Col xs={9}>1 Original Banana Bread</Col>
              <Col xs={3}>
                ₱<span data-testid="price">{props.data.price}</span>
              </Col>
            </Row>
          </div>
          <div className="line-separator"></div>
          <div className="subtotal">
            <Row>
              <Col xs={9}>Subtotal</Col>
              <Col xs={3}>
                ₱<span data-testid="subtotal">{props.data.subtotal}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={9}>Delivery fee</Col>
              <Col xs={3}>
                ₱
                <span data-testid="delivery-fee">{props.data.deliveryFee}</span>
              </Col>
            </Row>
          </div>
          <div className="line-separator"></div>
          <div className="total">
            <Row>
              <Col xs={9}>
                <b>Total</b>
              </Col>
              <Col xs={3}>
                <b>
                  ₱<span data-testid="total">{props.data.total}</span>
                </b>
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
