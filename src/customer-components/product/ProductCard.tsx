import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import { ProductDto } from "./ProductPage";
import { formatCurrency } from "utils/CurrencyFormatterUtil";

interface ProductCardProps {
  product: ProductDto;
  onAddToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="product-card" key={props.product.id}>
      <Card.Img variant="top" src="https://via.placeholder.com/100px100" />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>{props.product.unitPrice && formatCurrency(props.product.unitPrice)}</Card.Text>
        <div className="d-flex">
          <Button
            variant="primary"
            onClick={props.onAddToCart}
          >
            Add to cart
          </Button>
          {props.product.quantity > 0 && (
            <div className="border rounded ml-2 text-center quantity">
              {props.product.quantity}
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
