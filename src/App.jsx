import "./App.css";
import ParentComp from "./components/ParentComp";
import { ThemeContextProvider } from "./hooks/useThemeContext";

function App() {
  return (
    <main className="main-container">
      <ThemeContextProvider>
        <ParentComp />
      </ThemeContextProvider>
    </main>
  );
}

export default App;
