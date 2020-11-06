import React from "react";
import { Link } from "react-router-dom";
import CheckoutItems from "./CheckoutItems";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
          <h1>
              Checkout (
              <Link to='/checkout'>{cart?.length} items</Link>
              )
          </h1>
        <div className="payment_container_section">
          <div className="payment_container_section_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_container_section_address">
            <h3>{user?.email}</h3>
            <p>Pandippillil House</p>
            <p>Edavetty Thodupuzha 685588</p>
          </div>
        </div>
        <div className="payment_container_section">
        <div className="payment_container_section_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment_container_section_items">
          {cart.map((item) => (
          <CheckoutItems
            product_id={item.id}
            product_title={item.title}
            product_price={item.price}
            product_image={item.image}
            product_rating={item.rating}
          />
        ))}
          </div>
        </div>
        <div className="payment_container_section">
        <div className="payment_container_section_title">
            <h3>Payment method</h3>
            <div className="payment_container_section_paymentDetails">

            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
