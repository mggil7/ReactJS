import React, { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleMediaQueryChange = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, [query]);

  return matches;
};

export default function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
  <div>
    <p>useMediaQuery</p>
    {isMobile ? 
      <p>Mobile View</p> 
        : 
      <p>Desktop View</p>
    }
    </div>
  )
}
