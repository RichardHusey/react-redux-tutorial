import React from "react";

import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => dispatch(allActions.counterActions.increase())}>
        +
      </button>
      &nbsp;
      {counter}
      &nbsp;
      <button onClick={() => dispatch(allActions.counterActions.decrease())}>
        -
      </button>
    </>
  );
};

export default Counter;
