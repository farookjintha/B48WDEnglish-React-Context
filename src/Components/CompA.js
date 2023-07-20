import CompB from "./CompB";
import { useState } from "react";
const CompA = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Comp A</h1>

      <div>
        <h1>COUNTER APP</h1>
        <h3>Count: {count}</h3>
        <div>
          <button onClick={handleIncrement}>INCREMENT</button>
          <button onClick={handleDecrement}>DECREMENT</button>
          <button onClick={handleReset}>RESET</button>
        </div>
      </div>
      <CompB />
    </div>
  );
};

export default CompA;
