import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTIme] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTIme(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h1>Hello, React!</h1>
      <h2>현재 시간: {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
