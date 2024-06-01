// import { useEffect } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  // useEffect(() => {
  //   document.body.setAttribute("data-theme", theme);
  // }, [theme]);

  const themeInfo = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
