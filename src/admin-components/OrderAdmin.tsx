import React from "react";
import Table from "react-bootstrap/Table";
import OrderApi from "../api/OrderApi";
import { OrderDetail } from "breadforyou-fetch-api";

const OrderAdmin: React.FC = () => {
  const [orders, setOrders] = React.useState<Array<OrderDetail>>([]);

  React.useEffect(() => {
    OrderApi.getOrders().then((res) => {
      setOrders(res);
    });
  }, []);

  return (
    <div className="admin-order">
      <h1>Admin order page</h1>
      <Table>
        <thead>
          <tr>
            <th>Order No</th>
            <th>Customer</th>
            <th>Order qty</th>
            <th>Order status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>
                {`${o.user?.firstName} ${o.user?.lastName}`}
              </td>
              <td>view order</td>
              <td>{o.tracking?.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderAdmin;
