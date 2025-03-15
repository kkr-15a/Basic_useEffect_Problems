import React, { useState, useEffect } from "react";

function ComponentMount() {
  const [count, setIncrement] = useState(0);
  useEffect(() => {
    document.title = `Welcome to my Page: ${count} `;
  }, [count]);

  function setIncre() {
    setIncrement((count) => count + 1);
  }

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={setIncre}>Increment</button>
      <button
        onClick={() => {
          setIncrement((count) => (count = 0));
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentMount;
