import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { OrderComponentProps } from "./OrderModel";

const DeliveryInfo: React.FC<OrderComponentProps> = (props) => {
  return (
    <div className="app-container">
      <section id="order">
        <div className="row justify-content-center">
          <div className="description">
            <div className="bold-title">Delivery information</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="description">
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Full name</Form.Label>
                <Form.Row>
                  <Col>
                    <Form.Control
                      name="given-name"
                      placeholder="First name"
                      aria-label={"firstName"}
                      onChange={props.onChange}
                      value={props.data && props.data.firstName || ""}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      name="family-name"
                      placeholder="Last name"
                      aria-label={"lastName"}
                      onChange={props.onChange}
                      value={props.data && props.data.lastName || ""}
                    />
                  </Col>
                </Form.Row>
                <Form.Label>Contact number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  aria-label={"contactNumber"}
                  onChange={props.onChange}
                  value={props.data && props.data.contactNumber || ""}
                />
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address 1</Form.Label>
                <Form.Control
                  type="string"
                  name="address-line1"
                  aria-label={"addressLine1"}
                  placeholder={"e.g. Street, Landmark"}
                  onChange={props.onChange}
                  value={props.data && props.data.addressLine1 || ""}
                />
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="string"
                  name="address-line2"
                  aria-label={"addressLine2"}
                  placeholder={"e.g. Village"}
                  onChange={props.onChange}
                  value={props.data && props.data.addressLine2 || ""}
                />
                <Form.Text className="text-muted">
                  We currently only deliver to Sta. Rosa, Laguna
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="deliveryOption">
                <Form.Label>Delivery option</Form.Label>
                <Form.Row>
                  <Form.Check
                    inline={true}
                    name={"deliveryOption"}
                    type={"radio"}
                    label={"Deliver"}
                    value={"deliver"}
                    onChange={props.onChange}
                    checked={props.data.deliveryType === "deliver"}
                  />
                  <Form.Check
                    inline={true}
                    name={"deliveryOption"}
                    type={"radio"}
                    label={"Meet up"}
                    value={"meetup"}
                    onChange={props.onChange}
                    checked={props.data.deliveryType === "meetup"}
                  />
                </Form.Row>
              </Form.Group>

              <div className="bold-title">Payment information</div>

              <Form.Group controlId="paymentOption">
                <Form.Row>
                  <Form.Check
                    inline={true}
                    name={"paymentOption"}
                    type={"radio"}
                    label={"Cash"}
                    value={"cash"}
                    onChange={props.onChange}
                    checked={props.data.paymentType === "cash"}
                  />
                  <Form.Check
                    inline={true}
                    name={"paymentOption"}
                    type={"radio"}
                    label={"GCash"}
                    value={"gcash"}
                    onChange={props.onChange}
                    checked={props.data.paymentType === "gcash"}
                  />
                </Form.Row>
              </Form.Group>

              <Button
                variant="primary"
                className="btn-next w-100"
                onClick={props.onNext}
              >
                One more step
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryInfo;
