import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./customer-components/home/Home";
import Order from "./customer-components/order/Order";
import instagramLogo from "./customer-components/home/icons8-instagram-96.png";
import "./App.scss";
import Admin from "./admin-components/Admin";
import Customer from "./customer-components/Customer";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Customer />
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
}

export default App;
