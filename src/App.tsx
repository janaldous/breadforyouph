import React from "react";
import "./breadforyouph.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Order from "./components/order/Order";
import instagramLogo from "./icons8-instagram-96.png";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/order">
            <Order />
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
}

export default App;
