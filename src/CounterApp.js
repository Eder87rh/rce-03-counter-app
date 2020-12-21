import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleApp = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleApp}>+1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleDecrement}>-1</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
