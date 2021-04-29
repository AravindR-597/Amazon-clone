import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart, user }, dispatch] = useStateValue();

  const handleClick = () => {
    if (user) {
      history.push("/payment");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} Items) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal(cart)}
        displayType={"text"}
        prefix={"₹"}
      />
      <button onClick={handleClick}>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
