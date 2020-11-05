import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
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
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login_SignInButton">Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon CLONE's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login_SignUpButton">Create your Amazon Account </button>
      </div>
    </div>
  );
}

export default Login;
