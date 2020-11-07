import React from "react";
import CheckoutItems from "./CheckoutItems";
import "./Order.css";
function Order({ order }) {
  console.log(order.data.cart);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{order.data.created}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map(item => {
        <CheckoutItems
          product_id={item.id}
          product_title={item.title}
          product_price={item.price}
          product_image={item.image}
          product_rating={item.rating}
          hideButton
        />;
      })}
    </div>
  );
}

export default Order;
