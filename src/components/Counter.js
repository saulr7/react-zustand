import React from "react";
import useStore from "../context/store";

const Counter = () => {
  const count = useStore((state) => state.count);

  return <h2>{count}</h2>;
};

export default Counter;
