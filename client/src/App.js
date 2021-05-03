import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Signup from "./Signup";


const promise = loadStripe(
  "pk_test_51Hkj3uF2MKAXuVSBOVU0vwLAZZLsHULPLh7YJbaIzOsbagXRtkra4dErCg9d47L2g3zFdxNHFyxKONyQnRqxrekF00rI76ngWD"
);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
