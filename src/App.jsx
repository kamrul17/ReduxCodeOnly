import { useState } from "react";
import Subcomponent from "./component/Subcomponent";
import ProductList from "./component/ProductList";
import CartComponent from "./component/CartComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./slice/counterSlice";

function App() {
  const [amt, setAmt] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handlePlus = () => {
    dispatch(increment());
  };
  const handleMinus = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncPayload = () => {
    dispatch(incrementByAmount(amt));
  };
  return (
    <>
      <div>
        <h1>hEY THERE</h1>
        <hr />
        {count}
        <button onClick={handlePlus}>+</button>
        <br />
        <br />
        <button onClick={handleMinus}>-</button>
        <br />
        <br />
        <br />
        <br />
        <button onClick={handleReset}>RESEt</button>
        <br />
        <br />
        <input
          type="number"
          value={amt}
          placeholder="ENter Amount"
          onChange={(e) => setAmt(e.target.value)}
        />
        <br />
        <button onClick={handleIncPayload}>Enter amount</button>
      </div>
      <br />
      <Subcomponent count={count} />
      <br />
      <br />
      <hr />
      <CartComponent />
      <hr />
      <ProductList />
    </>
  );
}

export default App;
