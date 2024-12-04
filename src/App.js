import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleReset = () => setCount(0);

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Counter: {count}</h1>
        <div className="button-container">
          <button
            className="counter-button increment-button"
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            className="counter-button decrement-button"
            onClick={handleDecrement}
          >
            -
          </button>
          <button
            className="counter-button reset-button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
