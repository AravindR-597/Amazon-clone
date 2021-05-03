const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/connection");
const authentication = require("./auth_config");
const orderFunctions = require("./orderFuctions");

const PORT = process.env.PORT || 5000;

db.connect((err) => {
  if (err) console.log("DB Connection Error" + err);
  console.log("Connected to DB");
});

app.use(express.json());
app.use(cors());
//
app.post("/login", (req, res) => {
  authentication.login(req.body).then((data) => {
    res.send(data);
  });
});
app.post("/signup", (req, res) => {
  authentication.signup(req.body).then((data) => {
    res.send(data);
  });
});
app.post("/payments/create", async (req, res) => {
  console.log("backend test");
  const total = req.query.total;
  await orderFunctions.stripePay(total).then((paymentIntent) => {
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
});
app.post("/orders", (req, res) => {
  orderFunctions.orders(req.body).then(() => {
    res.status(201).send({
      orderAddition: true,
    });
  });
});
app.get("/getmyorders/:id", (req, res) => {
  orderFunctions.getOrder(req.params.id).then((data) => {
    res.status(201).send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});

//uVFvAi5mxQrlk7Sb
