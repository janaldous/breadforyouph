import React from "react";
import OrderApi from "../api/OrderApi";
import { OrderDetail as OrderDetailModel } from "breadforyou-fetch-api";
import { useParams } from "react-router-dom";

const OrderDetail: React.FC = () => {
  const [order, setOrder] = React.useState<OrderDetailModel>();

  const { id } = useParams();

  React.useEffect(() => {
    OrderApi.getOrders().then((res) => {
      //   setOrder(res);
    });
  }, []);

  const handleClick = (orderId?: number) => {};

  return (
    <div className="order-detail-container">
      <h2>Order # {id}</h2>
    </div>
  );
};

export default OrderDetail;
