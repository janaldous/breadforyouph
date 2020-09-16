import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Order from "./cart/Order";
import instagramLogo from "./icons8-instagram-96.png";
import "./Customer.scss";
import { Feature } from "@paralleldrive/react-feature-toggles";
import NotFoundComponent from "NotFoundComponent";
import { ProductPage, ProductDto } from "./product/ProductPage";
import { Routes } from "Routes";
import { CustomerContext, CheckoutCart } from "./CustomerContext";

const Customer: React.FC<{}> = () => {
  const [cart, setCart] = React.useState<CheckoutCart>({
    items: [],
    total: 0,
    numberOfItems: 0,
  });

  const handleAddToCart = (
    product: ProductDto,
    operation: "increase" | "decrease"
  ) => {
    setCart((cart) => {
      const itemIndex = cart.items.findIndex((i) => i.id === product.id);
      let newItems = cart.items;
      let numberOfItems = 0;
      if (itemIndex > -1) {
        const oldQuantity = newItems[itemIndex].quantity;
        const newQuantity =
          operation === "increase" ? oldQuantity + 1 : oldQuantity - 1;
        numberOfItems =
          operation === "increase" ? numberOfItems + 1 : numberOfItems - 1;

        newItems = cart.items
          .map((p) => {
            if (p.id === product.id) {
              return {
                ...p,
                quantity: newQuantity,
              };
            } else {
              return p;
            }
          })
          .filter((p) => p.quantity > 0);
      } else {
        product.quantity += 1;
        numberOfItems += product.quantity;
        newItems = [...newItems, product];
      }
      const total = newItems.reduce(
        (prev, cur) => prev + cur.quantity * cur.unitPrice,
        0
      );
      console.log("new cart", {
        ...cart,
        items: [...newItems, product],
        numberOfItems,
        total,
      });
      return {
        ...cart,
        items: newItems,
        numberOfItems,
        total,
      };
    });
  };

  return (
    <div className="app-container">
      <CustomerContext.Provider value={{ cart, onAddToCart: handleAddToCart }}>
        <Router>
          <Switch>
            <Route path={Routes.Checkout}>
              <Feature
                name="online-order"
                inactiveComponent={NotFoundComponent}
                activeComponent={Order}
              />
            </Route>
            <Route path={Routes.Products}>
              <Feature
                name="online-order"
                inactiveComponent={NotFoundComponent}
                activeComponent={ProductPage}
              />
            </Route>
            <Route path={Routes.Home}>
              <Home />
            </Route>
          </Switch>
        </Router>
      </CustomerContext.Provider>
      <footer>
        <div className="footer-item">breadforyouph</div>
        <div className="footer-item">
          <a href="https://www.instagram.com/breadforyouph/">
            <picture>
              <img
                className="instagram-icon"
                srcSet={instagramLogo}
                alt="Instagram link"
              />
            </picture>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Customer;
