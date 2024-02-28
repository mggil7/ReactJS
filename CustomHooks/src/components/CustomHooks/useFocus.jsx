/* 
Here the useFocus custom hook returns an array containing a ref and a
 function. The ref is used to store a reference to the DOM element, and 
 the focusElement function is used to focus that element when called.

 */

import { useRef, useCallback } from "react";

export const useFocus = () => {
  const ref = useRef(null);

  const focusElement = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return [ref, focusElement];
};

export default function App() {
  const [inputRef, focusInput] = useFocus();

  return (
    <div className="App">
      <p>useFocus</p>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </div>
  );
}
