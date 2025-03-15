import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds === 0) return;
    const timerId = setInterval(() => {
      setSeconds((a) => a - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [seconds]);

  return (
    <div>
      <h2>It starts from 10 seconds and ends at 0 seconds</h2>
      <h1>{seconds} seconds left</h1>
    </div>
  );
};

export default Timer;
