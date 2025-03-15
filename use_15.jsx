import React, { useEffect } from "react";

const ScrollLogger = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "2000px" }}>
      <h1>Scroll the page and check the console for scroll position.</h1>
    </div>
  );
};
console.log(ScrollLogger);

export default ScrollLogger;
