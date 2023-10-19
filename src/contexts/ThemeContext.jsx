import React from "react";

const ThemeContext = React.createContext();
const isDark =
  window.matchMedia("(prefers-color-scheme: dark)").matches === true
    ? "dark"
    : "light";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    const local = JSON.parse(localStorage.getItem("theme")) || undefined;
    if (local) {
      setTheme(local);
      return;
    }

    setTheme(isDark);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
