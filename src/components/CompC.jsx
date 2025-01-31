import { useThemeContext } from "../hooks/useThemeContext";

const CompC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className={`child-component ${theme}`}>
      <button onClick={toggleTheme}>Switch</button>
    </div>
  );
};

export default CompC;
