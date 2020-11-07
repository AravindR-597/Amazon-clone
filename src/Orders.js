import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import { db } from "./firebase";

function Orders() {
  const [{ user,cart }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
     console.log(user)
    if (user) {
       db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot =>
          setOrders(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      } else {
      setOrders([]);
    }

  }, [user]);

console.log(user)
  return (
    <div className="orders">
      <h1>Your Order </h1>
      <div className="orders_container">
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
