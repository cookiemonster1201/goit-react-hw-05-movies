import { createContext, useEffect, useState } from 'react';

const THEME = {
  light: { backgroundColor: '#cac8c8', fontColor: '#000' },
  dark: { backgroundColor: '#181818', fontColor: '#fff' },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeTheme = () => {
    document.body.style.backgroundColor = isDark
      ? THEME.dark.backgroundColor
      : THEME.light.backgroundColor;
    document.body.style.color = isDark
      ? THEME.dark.fontColor
      : THEME.light.fontColor;
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    changeTheme();
    localStorage.setItem('isDark', JSON.stringify(!isDark));
  };

  useEffect(() => {
    const isCurrentThemeDark = JSON.parse(localStorage.getItem('isDark'));

    setIsDark(isCurrentThemeDark);
    changeTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    changeTheme();
  }, [changeTheme]);

  return (
    <ThemeContext.Provider value={[isDark, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
