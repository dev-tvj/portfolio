import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const DarkModeToggleButton = ({ theme, toggleTheme }) => {

  const isDarkMode = theme === "dark";

  return (
    <div style={{ display: "flex"}}>
      <DarkModeToggle
        onChange={toggleTheme}
        checked={isDarkMode}
        size={70}
      />
    </div>
  );
};


export default DarkModeToggleButton;
