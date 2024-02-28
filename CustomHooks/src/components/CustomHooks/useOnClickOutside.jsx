import React, { useRef, useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export default function App() {
  const ref = useRef(null);

  const onClose = () => {
    alert("clicked outside");
  };

  useOnClickOutside(ref, onClose);

  return( 
    <div>
    <p>useOnClickOutside</p>
    <div ref={ref}>
      Click outside this element to close
    </div>
    </div>
  )
  }