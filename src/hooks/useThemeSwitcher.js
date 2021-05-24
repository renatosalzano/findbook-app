import { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
  const [theme, setTheme] = useState("light_mode");
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const get_theme = localStorage.getItem("findbook_theme");
    if (get_theme === "light") {
      setTheme("light_mode");
      setTimeout(() => {
        setTransition(true);
      }, 400);
    }
    if (get_theme === "dark") {
      setTheme("dark_mode");
      setTimeout(() => {
        setTransition(true);
      }, 400);
    }
  }, []);

  const switch_theme = () => {
    setTransition(true);
    if (theme === "light_mode") {
      localStorage.setItem("findbook_theme", "dark");
      return setTheme("dark_mode");
    }
    if (theme === "dark_mode") {
      localStorage.setItem("findbook_theme", "light");
      return setTheme("light_mode");
    }
  };

  return { switch_theme, transition, theme };
};
