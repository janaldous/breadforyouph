import React from "react";
import OrderApi from "../api/OrderApi";
import { OrderDetail } from "breadforyou-fetch-api";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const OrderAdmin: React.FC = () => {
  const [orders, setOrders] = React.useState<Array<OrderDetail>>([]);

  React.useEffect(() => {
    OrderApi.getOrders().then((res) => {
      setOrders(res);
    });
  }, []);

  return (
    <div className="admin-order">
      <h2>Admin order page</h2>
      <TableContainer component={Paper}>
        <Table aria-label="orders table">
          <TableHead>
            <TableRow>
              <TableCell>Order No</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Order qty</TableCell>
              <TableCell>Order status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{`${row.user?.firstName} ${row.user?.lastName}`}</TableCell>
                <TableCell>view order</TableCell>
                <TableCell>{row.tracking?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderAdmin;
