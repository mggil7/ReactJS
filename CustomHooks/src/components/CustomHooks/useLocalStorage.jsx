/* the useLocalStorage hook is used in the App Component to 
persist and retrieve the value associated with the tokenName’ key
 in local storage. The component renders an input field that 
 allows the user to update the persisted value. */


import React, { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      console.log("valueToStore", valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const item = window.localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.error(error);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
};

export default function App() {
  const [token, setToken] = useLocalStorage("tokenName", "");
  console.log("token", token);

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  return (
    <div>
        <p>useLocalStorage</p>
      <input type="text" value={token} onChange={handleTokenChange} />
    </div>
  );
}