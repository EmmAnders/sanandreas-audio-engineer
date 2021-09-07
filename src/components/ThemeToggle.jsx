import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(false);

  const handleChange = () => {
    setTheme(!theme);
    if (theme) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("Theme", "light");
      document.body.classList.remove("dark-mode");
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") return document.body.classList.add("dark-mode");
  });

  return (
    <div className="toggleContainer">
      <button onClick={handleChange} className="toggleBtn">
        {theme ? "DARK" : "LIGHT"}
      </button>
    </div>
  );
};

export default ThemeToggle;
