require ('dotenv').config()
const db = require("./config/connection");
const collection = require("./config/collection");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

module.exports = {
  stripePay: (total) => {
    return new Promise(async (resolve, reject) => {
      await stripe.paymentIntents
        .create({
          amount: total,
          currency: "inr",
        })
        .then((data) => {
          resolve(data);
        });
    });
  },
  orders: (data) => {
    return new Promise(async (resolve, reject) => {
      await db
        .get()
        .collection(collection.ORDER_COLLECTION)
        .insertOne(data)
        .then(() => {
          resolve();
        });
    });
  },
  getOrder: (id) => {
    return new Promise(async (resolve, reject) => {
      let user = await db
        .get()
        .collection(collection.ORDER_COLLECTION)
        .find({ user_id: id }).sort({"orderDetails.created":-1}).toArray();
        console.log(user)
      if (user) {
        let order = {
          orderInPool: true,
          user,
        };
        resolve(order);
      } else {
        let order = {
          orderInPool: false,
        };
        resolve(order);
      }
    });
  },
};
