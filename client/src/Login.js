import axios from "./axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = async (e) => {
    e.preventDefault();
    await axios
      .post("/login", { email, password })
      .then((auth) => {
        console.log(auth);
        if (auth.data.loginStatus) {
          dispatch({
            type: "SET_USER",
            user: auth.data.user,
          });
          history.goBack();
        } else {
          alert("user not found");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG7.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login_form">
        <h1>Sign in</h1>
        <form action="">
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
          <button type="submit" className="login_SignInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon CLONE's Conditions of Use and
          Privacy Notice.
        </p>
        <Link to="/signup">
        <button className="login_SignUpButton" >
          Create your Amazon Account{" "}
        </button>
        </Link>

      </div>
    </div>
  );
}

export default Login;
