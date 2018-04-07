import React from "react";
import Digit from "./Digit/Digit";

const CountDown = props => {
  return (
    <div className="d-flex my-4">
      <Digit color="#717FBE" value={props.time.min} />
      <Digit color="#218838" value={props.time.sec} />
      <Digit color="#4092BC" value={props.time.mili} />
    </div>
  );
};

export default CountDown;
