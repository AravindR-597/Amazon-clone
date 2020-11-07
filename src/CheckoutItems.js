import React from "react";
import "./CheckoutItems.css";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { useStateValue } from "./StateProvider";
// import { useHistory } from "react-router-dom";

function CheckoutItems({
  product_id,
  product_title,
  product_price,
  product_image,
  product_rating,
  hideButton,
}) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: product_id,
    });
  };
  return (
    <div className="checkoutItems">
      <img className="checkoutItems_image" src={product_image} alt="" />
      <div className="checkoutItems_info">
        <p className="checkoutItems_info_title">{product_title}</p>
        <p className="checkoutItems_info_price">
          <small>Rs </small>
          <strong>{product_price}</strong>
        </p>
        <div className="checkoutItems_info_rating">
          {Array(product_rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarOutlinedIcon />
              </p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove From Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutItems;
