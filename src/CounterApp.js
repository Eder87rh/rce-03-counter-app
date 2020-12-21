import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const handleApp = (e) => {
    console.log("true", e);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <button onClick={handleApp}>+1</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
