import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { OrderComponentProps } from "./OrderModel";

const DeliveryInfo: React.FC<OrderComponentProps> = (props) => {
  const handleSubmit = (e: any) => {
    if (props.onSubmit && props.onNext) {
      e.preventDefault();
      const submit = props.onSubmit();
      submit && props.onNext();
    }
  };

  const handleChange = (e: any) => {
    props.onChange && props.onChange(e);
  };

  const { formValues, formErrors } = props.data.deliveryForm;

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
                      onChange={handleChange}
                      value={formValues.firstName}
                      isInvalid={!!formErrors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.firstName}
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Control
                      name="family-name"
                      placeholder="Last name"
                      aria-label={"lastName"}
                      onChange={handleChange}
                      value={formValues.lastName}
                      isInvalid={!!formErrors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.lastName}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Row>
                <Form.Label>Contact number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  aria-label={"contactNumber"}
                  onChange={handleChange}
                  value={formValues.contactNumber}
                  isInvalid={!!formErrors.contactNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.contactNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address 1</Form.Label>
                <Form.Control
                  type="string"
                  name="address-line1"
                  aria-label={"addressLine1"}
                  placeholder={"e.g. Street, Landmark"}
                  onChange={handleChange}
                  value={formValues.addressLine1}
                  isInvalid={!!formErrors.addressLine1}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.addressLine1}
                </Form.Control.Feedback>
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="string"
                  name="address-line2"
                  aria-label={"addressLine2"}
                  placeholder={"e.g. Village"}
                  onChange={handleChange}
                  value={formValues.addressLine2}
                  isInvalid={!!formErrors.addressLine2}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.addressLine2}
                </Form.Control.Feedback>
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
                    onChange={handleChange}
                    checked={formValues.deliveryType === "deliver"}
                    isInvalid={!!formErrors.deliveryType}
                  />
                  <Form.Check
                    inline={true}
                    name={"deliveryOption"}
                    type={"radio"}
                    label={"Meet up"}
                    value={"meetup"}
                    onChange={handleChange}
                    checked={formValues.deliveryType === "meetup"}
                    isInvalid={!!formErrors.deliveryType}
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
                    onChange={handleChange}
                    checked={formValues.paymentType === "cash"}
                    isInvalid={!!formErrors.paymentType}
                  />
                  <Form.Check
                    inline={true}
                    name={"paymentOption"}
                    type={"radio"}
                    label={"GCash"}
                    value={"gcash"}
                    onChange={handleChange}
                    checked={formValues.paymentType === "gcash"}
                    isInvalid={!!formErrors.paymentType}
                  />
                </Form.Row>
              </Form.Group>

              <Button
                variant="primary"
                className="btn-next w-100"
                onClick={handleSubmit}
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
