import { useWindowEvent } from "@mantine/hooks";
import { useRef } from "react";

const UseRefComp = () => {

  const inputRef = useRef();

  useWindowEvent("keydown", (event) => {
    if (event.code === "KeyK" && event.ctrlKey) {
      event.preventDefault();
      inputRef.current.focus();
    }
  });

  return(
    <div>
        <h2>useRef Example:</h2>
        <input ref={inputRef} />;
    </div>
    )
};
export default UseRefComp;
