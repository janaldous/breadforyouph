import React from "react";
import OrderApi from "../api/OrderApi";
import { OrderDetail } from "../api/models/OrderDetail";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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
              <TableCell>Order status</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{`${row.user?.firstName} ${row.user?.lastName}`}</TableCell>
                <TableCell>{row.tracking?.status}</TableCell>
                <TableCell>
                  <Link to={`/orders/${row.id}`}>
                  <Button variant="contained" color="primary">
                    View
                  </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderAdmin;
