import React from "react";
import "./breadforyouph.scss";
import logo from "./logo.jpg";
import bananabread1 from "./bananabread.jpg";
import bananabread3 from "./bananabread3.jpg";
import lemon from "./lemon.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import instagram96 from "./icons8-instagram-96.png";
import instagram48 from "./icons8-instagram-48.png";

function App() {
  return (
    <div className="app-container">
      <Jumbotron>
        <div className="company-name">
          <img src={logo} alt="Logo" className="logo" />
          <p className="lead ">Healthy. Delicious. Kind.</p>
          <a
            className="btn btn-primary btn-lg"
            href="#how-to-order"
            role="button"
          >
            Order
          </a>
        </div>
      </Jumbotron>
      <div className="container pictures-section">
        <div className="row">
          <div className="col-sm">
            <img className="grid-img" src={bananabread1} alt="Banana bread" />
          </div>
          <div className="col-sm">
            <img className="grid-img" src={lemon} alt="Lemon with almonds" />
          </div>
          <div className="col-sm">
            <img className="grid-img" src={bananabread3} alt="Banana bread" />
          </div>
        </div>
      </div>
      <section>
        <div className="section-title">The Bread</div>
        <div className="instructions">Banana bread smothered in lemon zest</div>
      </section>
      <section id="how-to-order">
        <div className="row">
          <div className="col-sm-4">
            <div className="section-title">How to Order</div>
          </div>
          <div className="col-sm-8">
            <div className="instructions">
              DM the following information on Instagram or text to 09178001866
            </div>
            <div className="message">
              <div className="message-line">
                Name: <span>Juan de la Cruz</span>
              </div>
              <div className="message-line">
                Order: <span>2 banana bread</span>
              </div>
              <div className="message-line">
                Mode of payment: <span>COD or GCash to 09178001866</span>
              </div>
              <div className="message-line">
                Delivery option:{" "}
                <span>Meet up location or address in Sta. Rosa, Laguna</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-title">About us</div>
        <div className="instructions">
          100% of profits go to COVID-19 Relief Fund
        </div>
      </section>
      <footer>
        <div className="footer-item">
          All profits will go towards COVID-19 charities
        </div>
        <div className="footer-item">
          <a href="https://www.instagram.com/breadforyouph/">
          <picture>
            <source srcSet={instagram96} media="(min-width: 550px)"/>
            <img className="instagram-icon" srcSet={instagram48} alt="Instagram link"/>
          </picture>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
