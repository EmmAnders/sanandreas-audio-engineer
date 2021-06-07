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
    <div>
      <button onClick={handleChange}>
        {theme ? "Light Mode" : "Dark Mode"}
      </button>{" "}
    </div>
  );
};

export default ThemeToggle;
