import { useState, useEffect } from "react";

const LocalStorageSync = () => {
  const [input] = useState(localStorage.getItem("input") || "");

  useEffect(() => {
    localStorage.setItem("input", input);
  }, [input]);

  return (
    <input type="text" defaultValue={input} style={{ fontWeight: "normal" }} />
  );
};

export default LocalStorageSync;
