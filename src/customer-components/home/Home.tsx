import React from "react";
import logo from "../../logo.jpg";
import bananabread1 from "./bananabread.jpg";
import bananabread3 from "./bananabread3.jpg";
import lemon from "./lemon.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import "./Home.scss";

const defaultMessage = "Name:\nOrder:\nPayment:\nDelivery:";
const uriDefaultMessage = encodeURIComponent(defaultMessage);
const smsURI = `sms:09178001866;?&body=${uriDefaultMessage}`;

function Home() {
  return (
    <div className="home-container">
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
          <div className="description">
            <p>
              Freshly baked and healthy banana bread with almonds, walnuts,
              cinnamon, lemon zest and muscovado sugar.
            </p>
            <p>
              Crunchy and nutty on the top and light and moist in the inside.
            </p>
            <p>
              Only <b>₱165</b> per loaf (delivery included)
            </p>
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
              <div className="message-line">Name: Juan de la Cruz</div>
              <div className="message-line">Order: 2 original banana bread</div>
              <div className="message-line">
                Mode of payment: COD or GCash to 09178001866
              </div>
              <div className="message-line">
                Delivery: Meet up location or Drop off address
              </div>
            </div>
          </div>
          <div className="instruction-step">
            <Link to="/order">
              <button
                className="btn btn-primary"
                role="button"
                id="btn-order-online"
              >
                Order online
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="section-title center">About us</div>
        <div className="row justify-content-center">
          <div className="description">
            <p>
              100% of profits go to the Covid-19 Relief Initiative by Saddleback
              Sta. Rosa.
            </p>
            <p>
              Aim: Food Pantry with the goal to feed 5,000 people from Sitio
              Mangumpit, Sitio Buntog, Inchican, Don Jose, Bgry. San Antonio,
              San Pedro, Sitio Hemedes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
