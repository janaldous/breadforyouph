import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Order from "./cart/Order";
import instagramLogo from "./icons8-instagram-96.png";
import "./Customer.scss";
import { Feature } from "@paralleldrive/react-feature-toggles";
import NotFoundComponent from "NotFoundComponent";
import { ProductPage } from "./product/ProductPage";
import { Routes } from "Routes";

const Customer: React.FC<{}> = () => {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path={Routes.Cart}>
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
