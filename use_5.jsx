import React, { useState, useEffect } from "react";

function ScreenSize() {
  const [width, setwidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", changeSize);
  });

  function changeSize() {
    setHeight(window.innerHeight);
    setwidth(window.innerWidth);
  }

  return (
    <div>
      <h4>width of the window: {width}</h4>
      <h4>Height of the window: {height}</h4>
    </div>
  );
}

export default ScreenSize;
