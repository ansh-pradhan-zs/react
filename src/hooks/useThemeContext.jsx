import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("themeA");

  function toggleTheme() {
    if (theme === "themeA") setTheme("themeB");
    else setTheme("themeA");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
