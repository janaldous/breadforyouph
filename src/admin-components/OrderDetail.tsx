import React from "react";
import OrderApi from "../api/OrderApi";
import { OrderDetail as OrderDetailModel } from "breadforyou-fetch-api";
import { useParams, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Receipt from "./Receipt";

const OrderDetail: React.FC = () => {
  const [order, setOrder] = React.useState<OrderDetailModel>();

  const { id } = useParams();

  React.useEffect(() => {
    OrderApi.getOrder(id).then((res) => {
      setOrder(res);
    });
  }, [id]);

  return (
    <div className="order-detail-container">
      <h2>Order #{id}</h2>
      <div>
        <b>Order</b>
      </div>
      <div>{id}</div>
      <div>Status</div>
      <div>{order?.tracking?.status}</div>
      <div>Last updated</div>
      <div>{order?.tracking?.dateLastUpdated?.toDateString()}</div>
      <br />
      <Receipt orderDetail={order} />
      <br />
      <div>
        <b>Customer</b>
      </div>
      <div>Name</div>
      <div>{`${order?.user?.firstName} ${order?.user?.lastName}`}</div>
      <div>Contact number</div>
      <div>{order?.user?.contactNumber}</div>
      <br />
      <div>
        <b>Shipping address</b>
      </div>
      <div>Delivery Type</div>
      <div>{order?.deliveryType}</div>
      <div>{order?.shipping?.addressLineOne}</div>
      <div>{order?.shipping?.addressLineTwo}</div>
      <div>{order?.shipping?.city}</div>
      <div>{order?.shipping?.province}</div>
      <div>{order?.shipping?.postalCode}</div>
      <br />
      <div>
        <b>Payment information</b>
      </div>
      <div>{order?.paymentType}</div>
      <br />
      <Link to={"/orders"}>
        <Button variant="contained" color="primary">
          Back
        </Button>
      </Link>
    </div>
  );
};

export default OrderDetail;
