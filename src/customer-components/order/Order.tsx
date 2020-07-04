import React from "react";
import OrderInfo from "./OrderInfo";
import DeliveryInfo from "./DeliveryInfo";
import OrderConfirmation from "./OrderConfirmation";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.jpg";
import OrderSummary from "./OrderSummary";
import { OrderData, DeliveryData } from "./OrderModel";
import { OrderDto, OrderDtoDeliveryTypeEnum } from "breadforyou-fetch-api";
import OrderApi from "../../api/OrderApi";
import Spinner from "react-bootstrap/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { isBrowser } from "react-device-detect";

const inputNameMapper = {
  "given-name": "firstName",
  "family-name": "lastName",
  phone: "contactNumber",
  "address-line1": "addressLine1",
  "address-line2": "addressLine2",
  deliveryOption: "deliveryType",
  paymentOption: "paymentType",
  city: "city",
  "special-instructions": "specialInstructions",
  "delivery-date": "deliveryDate",
};

export default function Order() {
  const [step, setStep] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<OrderData>({
    quantity: 1,
    subtotal: 165,
    deliveryFee: 0,
    total: 165,
    price: 165,
    deliveryForm: {
      formValues: {
        firstName: "",
        lastName: "",
        contactNumber: "",
        addressLine1: "",
        addressLine2: "",
        city: "Sta. Rosa",
        deliveryType: undefined,
        paymentType: undefined,
        deliveryDate: undefined,
      },
      formErrors: {},
      formTouched: {
        firstName: false,
        lastName: false,
        contactNumber: false,
        addressLine1: false,
        addressLine2: false,
        deliveryType: false,
        paymentType: false,
        city: false,
        specialInstructions: false,
        deliveryDate: false,
      },
      isSubmitting: false,
    },
  });

  const handleNext = () => {
    setStep((oldStep) => oldStep + 1);
  };

  const handlePrev = () => {
    setStep((oldStep) => oldStep - 1);
  };

  const handleChange = (e: any) => {
    let value = e.target.value;
    // console.log(`${e.currentTarget.name}`)
    if (e.currentTarget.name === "quantity") {
      const subtotal = value * data.price;
      setData((oldData) => ({ ...oldData, total: subtotal, subtotal }));
    } else {
      let name = inputNameMapper[e.currentTarget.name] || e.currentTarget.name;
      // console.log(`changing ${name} to ${value} ${e.target.value}`)

      if (name === "deliveryDate") {
        value = new Date(e.target.value);
      }

      setData((oldData) => {
        const newData = {
          ...oldData,
          deliveryForm: {
            ...oldData.deliveryForm,
            formValues: { ...oldData.deliveryForm.formValues, [name]: value },
            formTouched: { ...oldData.deliveryForm.formTouched, [name]: true },
          },
        };

        if (
          newData.deliveryForm.formValues.deliveryType !==
          oldData.deliveryForm.formValues.deliveryType
        ) {
          const { formValues } = newData.deliveryForm;
          formValues.addressLine1 = "";
          formValues.addressLine2 = "";
          formValues.specialInstructions = "";
        }

        const errors = validate(newData.deliveryForm.formValues);
        if (newData.deliveryForm.formTouched) {
          newData.deliveryForm.formErrors = {
            ...newData.deliveryForm.formErrors,
            [name]: errors[name],
          };
        }
        newData.deliveryForm.isSubmitting = Object.keys(errors).length === 0;
        return newData;
      });
    }
  };

  const validateForm = () => {
    const errors = validate(data.deliveryForm.formValues);
    setData((oldData) => {
      const newData = { ...oldData };
      newData.deliveryForm.formErrors = errors;
      return newData;
    });
    const isValid = Object.keys(errors).length === 0;
    return isValid;
  };

  const getOrderDto = () => {
    const deliveryInfo = data.deliveryForm.formValues;

    if (
      !deliveryInfo.deliveryType ||
      !deliveryInfo.paymentType ||
      !deliveryInfo.deliveryDate
    ) {
      throw new Error();
    }

    const orderDto: OrderDto = {
      address: {
        line1: deliveryInfo.addressLine1,
        village: deliveryInfo.addressLine2,
        city: deliveryInfo.city,
        province: "Laguna",
        postcode: "4026",
        specialInstructions: deliveryInfo.specialInstructions,
      },
      deliveryType: deliveryInfo.deliveryType,
      paymentType: deliveryInfo.paymentType,
      quantity: data.quantity,
      deliveryDate: deliveryInfo.deliveryDate,
      user: {
        firstName: deliveryInfo.firstName,
        lastName: deliveryInfo.lastName,
        contactNumber: deliveryInfo.contactNumber,
      },
    };
    return orderDto;
  };

  const handleSubmitOrder = async () => {
    const orderDto = getOrderDto();
    setLoading(true);
    await OrderApi.postOrder(orderDto).then((res) => {
      setData((oldData) => ({
        ...oldData,
        orderConfirmation: {
          orderNumber: res.orderNumber,
        },
      }));
      setLoading(false);
    });

    return true;
  };

  const validate = (values: DeliveryData) => {
    const errors: any = {};
    if (!values.firstName) errors.firstName = "Required";
    if (!values.lastName) errors.lastName = "Required";
    if (!values.contactNumber) errors.contactNumber = "Required";
    const regexMobileNumber = RegExp("^09[0-9]{9}$");
    if (values.contactNumber && !regexMobileNumber.test(values.contactNumber)) {
      errors.contactNumber = "Invalid mobile number";
    }
    if (!values.deliveryType) errors.deliveryType = "Required";
    if (!values.paymentType) errors.paymentType = "Required";
    if (values.deliveryType === OrderDtoDeliveryTypeEnum.DELIVER) {
      if (!values.addressLine1) errors.addressLine1 = "Required";
      if (!values.addressLine2) errors.addressLine2 = "Required";
      if (values.city !== "Sta. Rosa")
        errors.city = "Sorry, we currently only deliver to Sta. Rosa";
    } else if (values.deliveryType === OrderDtoDeliveryTypeEnum.MEETUP) {
      if (!values.specialInstructions) errors.specialInstructions = "Required";
    }
    return errors;
  };

  const getBackButton = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div className="btn-back" onClick={handlePrev}>
            <a href={"/"}>
              {isBrowser ? "< Back to Home" : <ArrowBackIosIcon />}
            </a>
          </div>
        );
      case 1:
      case 2:
        return (
          <div className="btn-back" onClick={handlePrev}>
            {isBrowser ? "< Back" : <ArrowBackIosIcon />}
          </div>
        );
      case 3:
        return <div></div>;
      default:
        throw new Error("invalid step");
    }
  };

  const getContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <OrderInfo onNext={handleNext} data={data} onChange={handleChange} />
        );
      case 1:
        return (
          <DeliveryInfo
            onNext={handleNext}
            data={data}
            onChange={handleChange}
            onValidate={validateForm}
          />
        );
      case 2:
        return (
          <OrderSummary
            onNext={handleNext}
            data={data}
            onSubmit={handleSubmitOrder}
          />
        );
      case 3:
        return <OrderConfirmation data={data} />;
      default:
        throw new Error("invalid step");
    }
  };

  const getSpinner = () => {
    return (
      <section id="order">
        <div className="order-spinner">
          <Spinner animation="border" role="status" variant="primary">
            <span className="sr-only">Processing order...</span>
          </Spinner>
        </div>
      </section>
    );
  };

  return (
    <div className="order-container">
      <Navbar className="custom-navbar">
        <div className="flex-1-only">{getBackButton(step)}</div>
        <Navbar.Brand className="nav-brand" href="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <div className="flex-1-only"></div>
      </Navbar>
      <div className="content">{loading ? getSpinner() : getContent(step)}</div>
    </div>
  );
}
