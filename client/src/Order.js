import React from "react";
import CheckoutItems from "./CheckoutItems";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  console.log(order.id)
  return (
    <div className="order">
      <h2>Order  <span>{order.id}</span> </h2>
      <p className="order_date">
        {moment.unix(order?.orderData.created).format("MMMM Do YYYY, h:mma")}
      </p>
      {order.orderData.cart?.map((item) => (
        <CheckoutItems
          product_id={item.id}
          product_title={item.title}
          product_price={item.price}
          product_image={item.image}
          product_rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order_total">Order Total : {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.orderData.amount / 100}
        displayType={"text"}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
