import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function updateCount() {
    setCount(count + 1);
  }
  return (

    <div>
        <h2>useState Example</h2>
         <button onClick={updateCount}>Count is: {count}</button>
         <br />
    </div>
  )
  
};

export default Counter;
