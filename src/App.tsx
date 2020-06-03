import React from "react";
import "./breadforyouph.scss";
import logo from "./logo.jpg";
import bananabread1 from "./bananabread.jpg";
import bananabread3 from "./bananabread3.jpg";
import lemon from "./lemon.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";

function App() {
  return (
    <div className="app-container">
      <Jumbotron>
        <div className="company-name">
          <img src={logo} alt="Logo" />
          <p className="lead ">Healthy. Delicious. Kind.</p>
          <a
            className="btn btn-primary btn-lg"
            href="#section-order"
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
      <section>
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
            <div className="instructions">
              * Note: Limited slots available (maximum 6 loaves a day), excess
              orders will be pushed to the next batch the following day.
            </div>
            <div className="instructions">
              Delivery expense is included in the price. Thank you.
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
      <section id="section-order">
        <div className="section-title">Order</div>
        <div className="instructions">Form for ordering</div>
      </section>
      <footer>
        <div className="footer-item">
          All profits will go towards COVID-19 charties
        </div>
        <div className="footer-item placeholder-logo">IG</div>
        <div className="footer-item placeholder-logo">FB</div>
      </footer>
    </div>
  );
}

export default App;
