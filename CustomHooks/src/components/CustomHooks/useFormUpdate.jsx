/* useFormUpdate hook is used in the App Component to automatically 
monitor changes in all form fields, including input, textarea, 
and select elements. When the user modifies any form field, the 
form is marked as updated, and the beforeunload event listener
 is triggered when the user tries to navigate away with unsaved 
 changes.
 */

import React, { useState, useEffect } from "react";

export const useFormUpdate = () => {
  const [isFormUpdated, setIsFormUpdated] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isFormUpdated) {
        const message =
          "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormUpdated]);

  const handleFormUpdate = () => {
    setIsFormUpdated(true);
  };

  useEffect(() => {
    const formElements = document.querySelectorAll(
      "form input, form select, form textarea"
    );
    const handleFieldChange = () => {
      setIsFormUpdated(true);
    };

    formElements.forEach((element) => {
      element.addEventListener("change", handleFieldChange);
    });

    return () => {
      formElements.forEach((element) => {
        element.removeEventListener("change", handleFieldChange);
      });
    };
  }, []);

  return handleFormUpdate;
};

export default function App() {
  useFormUpdate();

  return (
    <div>
      <p>useFormUpdate</p>
      <form>
      <input type="text" />
      <input type="email" />
      <textarea />
      <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
    </div>
 
  );
}