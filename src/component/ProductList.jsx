import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";

const product = [
  { id: 1, pname: "realme", quantity: 2 },
  { id: 2, pname: "MI", quantity: 11 },
  { id: 3, pname: "Iphone", quantity: 12 },
];

function ProductList() {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    product.forEach((item) => {
      dispatch(addToCart(item)); // ✅ Dispatch each product separately
    });
  };
  return (
    <>
      <div>ProductList</div>
      <div>
        {product.map((item) => (
          <ol key={item.id}>
            <li>{item.pname}</li>
            <li>{item.quantity}</li>
          </ol>
        ))}
      </div>
      <div>
        <button onClick={handleAddToCart}>ADD ITEM</button>
      </div>
    </>
  );
}

export default ProductList;
