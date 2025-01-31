import { useEffect, useRef } from "react";
import { ThemeProvider2 } from "../../contexts/ThemeContext2";
import CounterAndTheme from "./CounterAndTheme";

const Day6 = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <main>
      <div className="empty-div">
        <span>Heyo! Wassup?</span>
      </div>
      <div ref={ref}>
        <ThemeProvider2>
          <CounterAndTheme />
        </ThemeProvider2>
      </div>
    </main>
  );
};

export default Day6;
