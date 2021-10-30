import { ThemeContext } from 'contexts/ThemeContext';
import { useContext } from 'react';

export default function ThemeSwitcher() {
  const [isDark, toggleTheme] = useContext(ThemeContext);

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <input type="checkbox" checked={isDark} onChange={toggleTheme}></input>
      <p style={{ marginLeft: '20px' }}>Dark theme</p>
    </div>
  );
}
