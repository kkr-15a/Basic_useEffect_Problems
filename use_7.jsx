import React, { useState } from "react";
import Child from "./child6";

function ParentUse() {
  const [message, setMessage] = useState("Hi");

  const changeMessage = () => {
    setMessage("New");
  };

  return (
    <div>
      <button onClick={changeMessage}>Click for change</button>
      <Child message={message} />
    </div>
  );
}

export default ParentUse;
