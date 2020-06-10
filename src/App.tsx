import React from "react";
import "./breadforyouph.scss";
import logo from "./logo.jpg";
import bananabread1 from "./bananabread.jpg";
import bananabread3 from "./bananabread3.jpg";
import lemon from "./lemon.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import instagramLogo from "./icons8-instagram-96.png";

const defaultMessage = "Name:\nOrder:\nPayment:\nDelivery:";
const uriDefaultMessage = encodeURIComponent(defaultMessage);
const smsURI = `sms:09178001866;?&body=${uriDefaultMessage}`;

function App() {
  return (
    <div className="app-container">
      <Jumbotron>
        <div className="company-name">
          <img src={logo} alt="Logo" className="logo" />
          <a
            className="btn btn-primary btn-lg"
            href="#how-to-order"
            role="button"
            id="btn-order"
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
      <section id="the-bread">
        <div className="row">
          <div className="section-title center">The Bread</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm flavor shadow">
            <div>Walnut</div>
          </div>
          <div className="col-sm flavor shadow">
            <div>Almond</div>
          </div>
          <div className="col-sm flavor shadow">
            <div>Cinnamon</div>
          </div>
          <div className="col-sm flavor shadow">
            <div>Original</div>
          </div>
        </div>
      </section>
      <section id="how-to-order">
        <div className="row">
          <div className="section-title center">How to Order</div>
        </div>
        <div className="instructions">
          <div className="instruction-step">
            <div>
              DM{" "}
              <a href="https://www.instagram.com/breadforyouph/">
                @breadforyouph
              </a>{" "}
              or Text to <a href={smsURI}>09178001866</a>
            </div>
          </div>
          <div className="instruction-step">
            <div className="message">
              <div className="message-line">
                Name: <span className="choice">Juan de la Cruz</span>
              </div>
              <div className="message-line">
                Order: <span className="choice">2 original banana bread</span>
              </div>
              <div className="message-line">
                Mode of payment: <span className="choice">COD</span>{" "}
                <span className="or">or</span>{" "}
                <span className="choice">GCash to 09178001866</span>
              </div>
              <div className="message-line">
                Delivery: <span className="choice">Meet up location</span>{" "}
                <span className="or">or</span>{" "}
                <span className="choice">Drop off address</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-title center">About us</div>
        <div className="instructions">
          100% of profits go to COVID-19 Relief Fund
        </div>
      </section>
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
