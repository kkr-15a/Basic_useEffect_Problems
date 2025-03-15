import React, { useEffect, useState } from "react";

const TwoEffects = () => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    if (clicked) {
      console.log("Button clicked");
    }
  }, [clicked]);

  return (
    <div>
      <button onClick={() => setClicked(true)}>Click me</button>
    </div>
  );
};

export default TwoEffects;
