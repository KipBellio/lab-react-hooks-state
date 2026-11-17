import React, { useState } from "react";

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  const [internalDarkMode, setInternalDarkMode] = useState(false);

  const darkMode = isDarkMode ?? internalDarkMode;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalDarkMode((previousMode) => !previousMode);
    }
  };

  return (
    <button onClick={handleToggle}>
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;