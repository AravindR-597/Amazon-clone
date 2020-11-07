import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutItems from "./CheckoutItems";
import "./Payment.css";
import { getTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      console.log("From client secret");
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);
  console.log("Secret >>>", clientSecret);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // console.log(paymentIntent)
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });
        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
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
          </div>
          <div className="payment_container_section_paymentDetails">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_container_section_paymentDetailsContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Total : {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getTotal(cart)}
                  displayType={"text"}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
                {error && <div>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
