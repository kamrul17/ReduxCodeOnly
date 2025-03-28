import React from "react";
import SubcomponentTwo from "./SubcomponentTwo";
function Subcomponent(props) {
  console.log("=========Subcomponent run=======");

  return (
    <>
      <h1>Count value is : {props.count}</h1>
      <SubcomponentTwo />
    </>
  );
}

export default Subcomponent;
