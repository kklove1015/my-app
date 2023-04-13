import React, { useState, useMemo } from "react";

function myExpensiveFunction(a, b) {
  console.log("Calculating...");
  return a * b;
}

function MyComponent() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const result = useMemo(() => myExpensiveFunction(a, b), [a, b]);

  const handleAChange = (event) => {
    setA(Number(event.target.value));
  };

  const handleBChange = (event) => {
    setB(Number(event.target.value));
  };

  return (
    <div>
      <div>
        <label>
          a:
          <input type="number" value={a} onChange={handleAChange} />
        </label>
      </div>
      <div>
        <label>
          b:
          <input type="number" value={b} onChange={handleBChange} />
        </label>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}

export default MyComponent;
