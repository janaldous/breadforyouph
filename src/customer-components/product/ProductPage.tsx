import React from "react";
import PublicApi from "../../api/PublicApi";
import { Product } from "../../api/models";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import logo from "../../logo.jpg";
import "./ProductPage.scss";
import Button from "react-bootstrap/Button";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { isBrowser } from "react-device-detect";

const cartCheck = (
  <svg
    width="2em"
    height="2em"
    viewBox="0 0 16 16"
    className="bi bi-cart-check"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
    />
    <path
      fillRule="evenodd"
      d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"
    />
  </svg>
);

export const ProductPage: React.FC = () => {
  const [products, setProducts] = React.useState<Array<Product>>([]);

  React.useEffect(() => {
    PublicApi.getProducts(0, 5).then((res) => {
      setProducts([
        ...res.data,
        { id: 2, name: "Chocolate Chip Banana Bread", unitPrice: 165.0 },
      ]);
    });
  }, []);

  return (
    <div className="product">
      <div className="order-container">
        <Navbar className="custom-navbar">
          <div className="flex-1-only">
            <Link to={"/"}>
              {isBrowser ? "< Back to Home" : <ArrowBackIosIcon />}
            </Link>
          </div>
          <Navbar.Brand className="nav-brand" href="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <div className="flex-1-only d-flex">
            <div className="flex-1-only"></div>
            <div className="shopping-cart">
              <Link to={`/cart`}>{cartCheck}</Link>
            </div>
          </div>
        </Navbar>
        <div className="content">
          {products.map((product) => (
            <Card style={{ width: "18rem" }} className="product-card" key={product.id}>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/100px100"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {currencyFormatter.format(product.unitPrice, { code: "PHP" })}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
