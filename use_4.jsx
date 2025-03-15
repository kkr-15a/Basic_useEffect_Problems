import React, { useState, useEffect } from "react";

function ChangeStateDelay() {
  const [text, setText] = useState("Click");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setText("Delayed Message");
        setClicked(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [clicked]);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <h3>{text}</h3>
      <button onClick={handleClick} disabled={clicked}>
        delayButton
      </button>
    </div>
  );
}

export default ChangeStateDelay;
