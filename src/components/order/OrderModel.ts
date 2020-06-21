import { OrderDtoDeliveryTypeEnum, OrderDtoPaymentTypeEnum } from "breadforyou-fetch-api";

export interface OrderData {
  quantity: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  price: 165;
  deliveryForm: {
    formValues: DeliveryData;
    formErrors: Partial<DeliveryData>;
    formTouched: DeliveryDataTouched;
    isSubmitting: boolean;
  }
}

export interface DeliveryData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  addressLine1: string;
  addressLine2: string;
  deliveryType?: OrderDtoDeliveryTypeEnum;
  paymentType?: OrderDtoPaymentTypeEnum;
}

export interface DeliveryDataTouched {
  firstName: boolean;
  lastName: boolean;
  contactNumber: boolean;
  addressLine1: boolean;
  addressLine2: boolean;
  deliveryType: boolean;
  paymentType: boolean;
}

export interface OrderComponentProps {
  onNext?: () => void;
  data: OrderData;
  onChange?: (e: any) => void;
  onSubmit?: () => boolean;
}
