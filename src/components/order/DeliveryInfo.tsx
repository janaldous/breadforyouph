import React from "react";
import "../../breadforyouph.scss";
import instagramLogo from "../../icons8-instagram-96.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { OrderComponentProps } from "./OrderModel";

const DeliveryInfo:React.FC<OrderComponentProps> = (props) => {
  return (
    <div className="app-container">
      <section id="order">
        <div className="row">
          <div className="section-title center">Order</div>
        </div>
        <div className="row justify-content-center">
          <div className="description">
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Full name</Form.Label>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Form.Row>
                <Form.Label>Contact number</Form.Label>
                <Form.Control type="string" />
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address 1</Form.Label>
                <Form.Control type="string" placeholder={"e.g. Street, Landmark"} />
                <Form.Label>Address 2</Form.Label>
                <Form.Control type="string" placeholder={"e.g. Village"} />
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

              <Form.Group controlId="paymentOption">
                <Form.Label>Payment option</Form.Label>
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

              <Button variant="primary" onClick={props.onNext}>
                Submit
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
}

export default DeliveryInfo;
