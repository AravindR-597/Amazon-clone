import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{cart},dispatch]=useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <Link to='/login'>
        <div className="header_nav_option">
          <span className="header_nav_option_1">Hello</span>
          <span className="header_nav_option_2">Sign In</span>
        </div>
        </Link>
        <div className="header_nav_option">
          <span className="header_nav_option_1">Returns</span>
          <span className="header_nav_option_2">& Orders</span>
        </div>
        <div className="header_nav_option">
          <span className="header_nav_option_1">Try</span>
          <span className="header_nav_option_2">Prime</span>
        </div>
        <div className="header_nav_option_cart">
          <Link to="/checkout">
            <ShoppingCartOutlinedIcon className="header_nav_option_1_cart" />
          </Link>
          <span className="header_nav_option_2 header_nav_option_1_count">
            {cart?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
