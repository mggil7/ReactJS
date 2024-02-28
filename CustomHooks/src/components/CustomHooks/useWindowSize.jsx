/* useWindowSize hook is used in the App Component to track 
the window dimensions and display them in the component.
 This useWindowSize custom hook encapsulates the logic for
  tracking window dimensions, making it reusable across 
  different components and promoting a more responsive and 
  adaptable user interface. */

import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>useWindowSize</p>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </div>
  );
}