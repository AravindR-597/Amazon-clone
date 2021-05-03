import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import axios from "./axios";
import { useHistory } from "react-router-dom";

function Orders() {
  const [{ user, cart }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    if (user) {
      await axios.get("/getmyorders/" + user._id).then((response) => {
        console.log(response.data.user);
        setOrders(
          response.data.user.map((doc) => ({
            id: doc._id,
            orderData: doc.orderDetails,
          }))
        );
      });
    } else {
      console.log(user);
      history.push("/");
    }
  }, [user]);
  return (
    <div className="orders">
      {orders.length != 0 ? (
        <h1>Your Orders</h1>
      ) : (
        <div className="no_orders">
          <h1>You haven't ordered anything !!!</h1>
        </div>
      )}
      <div className="orders_container">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
