import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const primeurl= "https://www.primevideo.com/"

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      dispatch({
          type:"SET_USER",
          user:""
      });
    }
  };
  const handlePrime = () =>{
    let Prime= window.open(primeurl,'_blank');
    Prime.focus()
  }
  return (
    <div className="header">
      <Link to="/"style={{ textDecoration: 'none' }}>
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
        <Link to={!user && "/login"} style={{ textDecoration: 'none' }}>
          <div className="header_nav_option" onClick={handleAuth}>
            <span className="header_nav_option_1">{user ? user.name : 'Hello Guest'}</span>
            <span className="header_nav_option_2">
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>
        <Link to={user && "/orders"} style={{ textDecoration: 'none' }}>
        <div className="header_nav_option">
          <span className="header_nav_option_1">Returns</span>
          <span className="header_nav_option_2">& Orders</span>
          </div>
          </Link>
        <div className="header_nav_option" id='prime' onClick={handlePrime}>
          <span className="header_nav_option_1">Try</span>
          <span className="header_nav_option_2">Prime</span>
        </div>
        <div className="header_nav_option_cart">
          <Link to="/checkout" style={{ textDecoration: 'none' }}>
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
