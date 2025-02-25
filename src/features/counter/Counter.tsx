import React, { FC, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { RootState } from "../../store"; // Import RootState

const Counter: FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementedValue, setIncrementedValue] = useState(2);

  return (
    <Fragment>
      <div>Counter</div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="increment By Amount"
          onClick={() => dispatch(incrementByAmount(incrementedValue))}
        >
          incrementByAmount
        </button>
        <input
          type="text"
          onChange={(e) => setIncrementedValue(Number(e.target.value))}
          value={incrementedValue}
        />
      </div>
    </Fragment>
  );
};

export default Counter;
