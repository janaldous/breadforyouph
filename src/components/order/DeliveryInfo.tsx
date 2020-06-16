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
                    <Form.Control name="given-name" placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control name="family-name" placeholder="Last name" />
                  </Col>
                </Form.Row>
                <Form.Label>Contact number</Form.Label>
                <Form.Control name="tel" type="string" />
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address 1</Form.Label>
                <Form.Control
                  type="string"
                  name="address-line1"
                  placeholder={"e.g. Street, Landmark"}
                />
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="string"
                  name="address-line2"
                  placeholder={"e.g. Village"}
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
                  />
                  <Form.Check
                    inline={true}
                    name={"deliveryOption"}
                    type={"radio"}
                    label={"Pick up/Meet up"}
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
                  />
                  <Form.Check
                    inline={true}
                    name={"paymentOption"}
                    type={"radio"}
                    label={"GCash"}
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
