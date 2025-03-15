import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputFocus = useRef();

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return <input ref={inputFocus} />;
}

export default FocusInput;
