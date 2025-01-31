import { ThemeContextProvider } from "../../hooks/useThemeContext";
import ParentComp from "../ParentComp";
import "./day15.css";

const Day15 = () => {
  return (
    <div className="main-container">
      <ThemeContextProvider>
        <ParentComp />
      </ThemeContextProvider>
    </div>
  );
};

export default Day15;
