import React from "react";
import OrderApi from "../api/OrderApi";
import { OrderDetail as OrderDetailModel } from "breadforyou-fetch-api";
import { useParams, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const OrderDetail: React.FC = () => {
  const [order, setOrder] = React.useState<OrderDetailModel>();

  const { id } = useParams();

  React.useEffect(() => {
    OrderApi.getOrders().then((res) => {
      //   setOrder(res);
    });
  }, []);

  return (
    <div className="order-detail-container">
      <h2>Order #{id}</h2>
      <div>Order number</div>
      <div>{id}</div>
      <Link to={"/orders"}><Button variant="contained" color="primary">Back</Button></Link>
    </div>
  );
};

export default OrderDetail;
