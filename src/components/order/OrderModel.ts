export interface OrderData {
  quantity: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
}

export interface OrderComponentProps {
  onNext: () => void;
  data: OrderData;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
