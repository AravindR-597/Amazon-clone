import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
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
        <Link to={!user && "/login"}>
          <div className="header_nav_option" onClick={handleAuth}>
            <span className="header_nav_option_1">{user ? user.email : 'Hello Guest'}</span>
            <span className="header_nav_option_2">
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>
        <Link to={user && "/orders"}>
        <div className="header_nav_option">
          <span className="header_nav_option_1">Returns</span>
          <span className="header_nav_option_2">& Orders</span>
          </div>
          </Link>
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
