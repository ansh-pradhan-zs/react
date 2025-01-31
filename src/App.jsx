import { useState } from "react";
import "./App.css";
import Day6 from "./components/Day6/Day6";
import DiceRoll from "./components/DiceRoll";

import ParentDetailCard from "./components/ParentDetailCard/ParentDetailCard";
import Accordion from "./components/Accordion/Accordion";
import Day9 from "./components/Day9/Day9";
import Day13 from "./components/Day13/Day13";
import Day14 from "./components/Day14/Day14";
import Day14Throttling from "./components/Day14Throttling/Day14Throttling";
import Day8 from "./components/Day8/Day8";
import Day15 from "./components/Day15/Day15";

function App() {
  // function throttle(func, delay) { // ? using timeoutId
  //   let timeoutId;
  //   return () => {
  //     if (!timeoutId) {
  //       func(); // ? api call
  //       timeoutId = setTimeout(() => {
  //         timeoutId = null;
  //       }, delay);
  //     }
  //   };
  // }

  const [index, setIndex] = useState(0);
  const [showMissionControl, setShowMissionControl] = useState(true);

  const assignments = [
    "Day 6",
    "Day 8",
    "Dice Roll",
    "Parent Detail Card",
    "Day 9",
    "Accordion",
    "Day 13",
    "Day 14",
    "Day 14 Throttling",
    "Day 15",
  ];

  return (
    <>
      <main
        className={
          index === 0
            ? "flex flex-col items-center justify-center w-[100vw] h-[100vh]"
            : ""
        }
      >
        {/* Mission Control */}
        {index === 0 && (
          <div className="flex flex-col items-center gap-10">
            <span className="text-4xl font-bold">Assignments</span>
            <div className="grid grid-cols-5 gap-10">
              {assignments.map((item, index) => {
                return (
                  <button
                    className="bg-blue-500 rounded-md p-4 text-white"
                    key={index}
                    onClick={() => setIndex(index + 1)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {index === 1 && <Day6 />}
        {index === 2 && <Day8 />}
        {index === 3 && <DiceRoll />}
        {index === 4 && (
          <ParentDetailCard
            title={"SDE-1"}
            desc={"He is a happy mannnnnnnnnnnnnnnnnnnnnn!"}
            img={
              "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        )}
        {index === 5 && <Day9 />}
        {index === 6 && <Accordion />}
        {index === 7 && <Day13 />}
        {index === 8 && <Day14 />}
        {index === 9 && <Day14Throttling />}
        {index === 10 && <Day15 />}
      </main>
    </>
  );
}

export default App;
