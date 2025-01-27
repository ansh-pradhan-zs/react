import { useThemeContext } from "../hooks/useThemeContext";

const CompB = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className={`child-component ${theme}`}>
      <button onClick={toggleTheme}>Switch</button>
    </div>
  );
};

export default CompB;
