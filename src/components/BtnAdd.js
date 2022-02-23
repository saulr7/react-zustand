import React from "react";
import useStore from "../context/store";

const BtnAdd = () => {
  const inc = useStore((state) => state.inc);
  console.log("btnAdd");
  return (
    <div>
      <button className='btn btn-primary' onClick={inc}>
        +
      </button>
    </div>
  );
};

export default BtnAdd;
