import axios from "./axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Signup.css";

function Signup() {
  const [{ user }, dispatch] = useStateValue();

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signUp = async (e) => {
    e.preventDefault();
    await axios
      .post("/signup", { name, mobileNumber, email, password })
      .then((auth) => {
        console.log(auth);
        if (auth) {
            dispatch({
                type:"SET_USER",
                user:auth.data
            })
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signup_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG7.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="signup_form">
        <h1>Sign up</h1>
        <form action="">
          <h5>Your Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Mobile Number</h5>
          <input
            type="number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup_Button" onClick={signUp}>
            Sign Up
          </button>
        </form>
        <p>
          We will not send anything to verify your phone. Message and Data rates
          won't apply.
        </p>
      </div>
    </div>
  );
}

export default Signup;
