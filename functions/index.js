const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51Hkj3uF2MKAXuVSB7WDY5YD1tsJe44pEAlnIpvmk37NuI0l20Ct9uRZJJPWw9u2YjNMJB62vHCnvoLOEa0xbEcXZ00y9QI6SO8"
);

//Api

//app config

const app = express();

//middleware

app.use(cors({ orgin: true }));
app.use(express.json());

//api routes

    app.get("/", (req, res) => {
        
      res.status(200).send("response from backend");
    });

app.post("/payments/create", async (req, res) => {
    console.log("backend test")
  const total = req.query.total;
  console.log("Total",total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listener
exports.api = functions.https.onRequest(app);
