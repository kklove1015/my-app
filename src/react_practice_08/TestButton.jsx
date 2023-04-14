import { useState } from "react";

function TestButton() {
  const [number, setNumber] = useState(0);

  const handleCheck = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber((number) => Math.max(number - 1, 0));
  };

  return (
    <div>
      <div>{number}</div>
      <button onClick={handleCheck}>증가</button>
      <button onClick={decrease} disabled={number === 0}>
        감소
      </button>
    </div>
  );
}

export default TestButton;
