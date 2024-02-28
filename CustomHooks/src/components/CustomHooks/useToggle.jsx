/* useToggle hook is used in the App Component to toggle
 a value between true and false.
 */

 import React, { useState } from "react";

export const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
};

export default function App() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
        <p>useToggle</p>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
}