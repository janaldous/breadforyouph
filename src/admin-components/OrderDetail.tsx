import React from "react";
import OrderApi from "../api/OrderApi";
import {
  OrderDetail as OrderDetailModel,
  OrderTrackingStatusEnum,
  OrderUpdateDtoStatusEnum,
} from "breadforyou-fetch-api";
import { useParams, Link } from "react-router-dom";
import Receipt from "./Receipt";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const OrderDetail: React.FC = () => {
  const [order, setOrder] = React.useState<OrderDetailModel>();
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<OrderTrackingStatusEnum>();

  const { id } = useParams();

  React.useEffect(() => {
    OrderApi.getOrder(id).then((res) => {
      setOrder(res);
      setStatus(res.tracking?.status);
    });
  }, [id]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    const mapper = (status: OrderTrackingStatusEnum) => {
      switch (status) {
        case OrderTrackingStatusEnum.REGISTERED:
          return OrderUpdateDtoStatusEnum.REGISTERED;
        case OrderTrackingStatusEnum.COOKING:
          return OrderUpdateDtoStatusEnum.COOKING;
        case OrderTrackingStatusEnum.OTW:
          return OrderUpdateDtoStatusEnum.OTW;
        case OrderTrackingStatusEnum.DELIVERED:
          return OrderUpdateDtoStatusEnum.DELIVERED;
        default:
          throw new Error();
      }
    };
    if (!order || !status) throw new Error();
    OrderApi.updateStatus(order.id + "", mapper(status))
      .then((res) => setOrder(res))
      .finally(() => setOpen(false));
  };

  const handleChange = (e: any) => {
    setStatus(e.target.value);
  };

  return (
    <div className="order-detail-container">
      <h2>Order #{id}</h2>
      <div>
        <b>Order</b>
      </div>
      <div>{id}</div>
      <div>Status</div>
      <div>
        {order?.tracking?.status}
        <Button variant="contained" onClick={handleOpen}>
          Update status
        </Button>
      </div>
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
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form>
            <FormControl>
              <InputLabel htmlFor="order-status">Status</InputLabel>
              <Select
                native={true}
                value={status}
                onChange={handleChange}
                input={<Input id="order-status" />}
              >
                <option value={OrderTrackingStatusEnum.REGISTERED}>
                  Registered
                </option>
                <option value={OrderTrackingStatusEnum.COOKING}>Cooking</option>
                <option value={OrderTrackingStatusEnum.OTW}>OTW</option>
                <option value={OrderTrackingStatusEnum.DELIVERED}>
                  Delivered
                </option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrderDetail;
