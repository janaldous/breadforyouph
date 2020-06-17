// import FormControlElement from "react-bootstrap/FormControlElement";

export interface OrderData {
  quantity: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  price: 165;
  firstName: string;
  lastName: string;
  contactNumber: string;
  addressLine1: string;
  addressLine2: string;
  deliveryType: string;
  paymentType: string;
}

export interface OrderComponentProps {
  onNext: () => void;
  data: OrderData;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
