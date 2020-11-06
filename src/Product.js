import React from "react";
import "./Product.css";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { useStateValue } from "./StateProvider";

function Product({
  product_id,
  product_title,
  product_price,
  product_image,
  product_rating,
}) {
  const [{cart}, dispatch] = useStateValue();
  console.log("this is cart items " ,cart)

  const addToCart = () => {
    //dispatching
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product_id,
        title: product_title,
        price: product_price,
        image: product_image,
        rating: product_rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{product_title}</p>
        <p className="product_info_price">
          <strong>{"₹"}</strong>
          <strong>{product_price}</strong>
        </p>
        <div className="product_info_rating">
          {Array(product_rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarOutlinedIcon className="product_info_rating_star" />
              </p>
            ))}
        </div>
      </div>
      <img src={product_image} alt="" />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
