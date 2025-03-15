import React, { useState, useEffect } from "react";

function StoringValue() {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input !== "") {
      console.log(input);
    }
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default StoringValue;
