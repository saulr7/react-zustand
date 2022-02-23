import React from "react";
import BtnAdd from "../components/BtnAdd";
import BtnSub from "../components/BtnSub";
import useStore from "../context/store";
import Counter from "../components/Counter";

const CounterPage = () => {
  const reset = useStore((state) => state.reset);
  return (
    <div className='container mt-5'>
      <div className='row my-4'>
        <div className='col'></div>
        <div className='col text-center'>
          <h1>My Counter:</h1>
        </div>
        <div className='col'></div>
      </div>
      <div className='row'>
        <div className='col text-center'>
          <BtnSub />
        </div>
        <div className='col text-center'>
          <Counter />
        </div>
        <div className='col text-center'>
          <BtnAdd />
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col'></div>
        <div className='col text-center'>
          <button className='btn btn-danger' onClick={reset}>
            Reset
          </button>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
};

export default CounterPage;
