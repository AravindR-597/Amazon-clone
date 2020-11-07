import React from "react";
import CheckoutItems from "./CheckoutItems";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { getTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
function Order({ order }) {
  const [{ cart, user }, dispatch] = useStateValue();
  console.log(order.data.cart);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map((item) => (
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
            <h3 className='order_total'>Order Total : {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount/100}
        displayType={"text"}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
