import { useThemeContext } from "../hooks/useThemeContext";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";
import CompD from "./CompD";

const ParentComp = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div className={`parent-container ${theme}`}>
      <button onClick={toggleTheme}>Switch</button>
      <div className="component-grid">
        <CompA />
        <CompB />
        <CompC />
        <CompD />
      </div>
    </div>
  );
};

export default ParentComp;
