import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function CartComponent() {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    console.log("Cart Updated:", cart.items);
  }, [cart]); // Runs when cart changes

  return (
    <>
      <div>CartComponent</div>
      {cart.items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.items.map((item, index) => (
          <ol key={index}>
            <li>{item.pname ? item.pname : "No Name Found"}</li>
            <li>{item.quantity}</li>
          </ol>
        ))
      )}
    </>
  );
}

export default CartComponent;
