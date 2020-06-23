import React from "react";
import { OrderDetail } from "breadforyou-fetch-api";

const Receipt: React.FC<{ orderDetail?: OrderDetail }> = (props) => {
  if (!props.orderDetail) {
    return <div className="receipt-container">No data.</div>;
  }

  const { orderItems } = props.orderDetail;

  return (
    <div className="receipt-container">
      <div>
        <b>Order details</b>
      </div>
      <div>Total items</div>
      <div>{(orderItems && orderItems.length) || 0}</div>
      <div>Product, qty</div>
      {orderItems?.map(row => (
          <div key={row.id}>{row.product?.name} {row.productCount}</div>
      ))}
      <div>{props.orderDetail.total}</div>
    </div>
  );
};

export default Receipt;
