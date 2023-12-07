import React from "react";

const isBrowser = typeof window !== "undefined";
const ThemeContext = React.createContext();
const isDark = isBrowser ? window.matchMedia("(prefers-color-scheme: dark)").matches === true
  ? "dark" : "light" : 'dark';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  const [showForm, setShowForm] = React.useState(false);

  const toggeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleModal = () => {
    setShowForm((prev) => !prev);
  }

  React.useEffect(() => {
    const local = isBrowser && window.localStorage ? JSON.parse(window.localStorage.getItem("theme")) : undefined;

    if (local) {
      setTheme(local);
      return;
    }

    setTheme(isDark);
  }, []);

  React.useEffect(() => {
    if(isBrowser) {
      window.localStorage.setItem("theme", JSON.stringify(theme));
      document.querySelector("body").dataset.theme = theme;
    }

  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggeTheme, showForm, handleModal }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
