import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  console.log("Counter component rendered. Current count:", count);

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment +</button>
      <button onClick={handleDecrement}>Decrement -</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
