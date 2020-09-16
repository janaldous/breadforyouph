import React from "react";
import { ProductDto } from "./product/ProductPage";

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface CheckoutCart {
  items: Array<ProductDto>;
  total: number;
  numberOfItems: number;
}

export interface CustomerContextStuff {
  cart: CheckoutCart;
  onAddToCart: (product: ProductDto, operation: "increase" | "decrease") => void;
}

export const CustomerContext = React.createContext<CustomerContextStuff>({
  cart: {
    items: [],
    total: 0,
    numberOfItems: 0,
  },
  onAddToCart: (productId, operation) => console.log
});
