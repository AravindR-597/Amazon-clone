import React from "react";
import "./Checkout.css";
import CheckoutItems from "./CheckoutItems";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  {
    cart.map((item) => console.log(item));
  }
  return (
    <>
      {cart.length !== 0 ? (
        <div className="checkout">
          <div className="checkout_left">
            <div className="checkout_left_text">
              <h4>
                Pay faster for all your shopping needs{" "}
                <span className="checkout_left_text_1_span">
                  with Amazon Pay balance
                </span>
              </h4>
              <p>
                Get Instant refund on cancellations | Zero payment failures{" "}
              </p>
            </div>
            <h3 className="checkout_user">
              Hello {user ? user?.name : "Guest User"}
            </h3>
            <h2 className="checkout_title">Shopping Cart</h2>
            {cart.map((item) => (
              <CheckoutItems
                key={item.id}
                product_id={item.id}
                product_title={item.title}
                product_price={item.price}
                product_image={item.image}
                product_rating={item.rating}
              />
            ))}
          </div>
          <div className="checkout_right">
            <Subtotal />
          </div>
        </div>
      ) : (
        <div className="no_items">
          <h1> !! Cart is Empty :(</h1>
        </div>
      )}
    </>
  );
}

export default Checkout;
