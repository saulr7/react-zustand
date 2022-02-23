import React from "react";
import useStore from "../context/store";

const selector = (state) => state.dec;

const BtnSub = () => {
  const dec = useStore(selector);
  console.log("btnSub");
  return (
    <button className='btn btn-primary' onClick={dec}>
      -
    </button>
  );
};

export default BtnSub;
