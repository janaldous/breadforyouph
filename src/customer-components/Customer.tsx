import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Order from "./order/Order";
import instagramLogo from "./icons8-instagram-96.png";
import "./Customer.scss";
import { Feature } from "@paralleldrive/react-feature-toggles";
import NotFoundComponent from "NotFoundComponent";

const Customer: React.FC<{}> = () => {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/order">
            <Feature
              name="online-order"
              inactiveComponent={NotFoundComponent}
              activeComponent={Order}
            />
          </Route>
          <Route path="/">
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
