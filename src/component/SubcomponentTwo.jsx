import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slice/counterSlice";

function SubcomponentTwo() {
  console.log("=========SubcomponentTWO run=======");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrem = () => {
    dispatch(increment());
  };
  return (
    <>
      <h1>Count value is : {count}</h1>
      <button onClick={handleIncrem}>
        increment value from SubcomponentTWO
      </button>
    </>
  );
}

export default SubcomponentTwo;
