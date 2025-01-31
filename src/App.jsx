import { useState } from "react";
import "./App.css";
import Day6 from "./components/Day6/Day6";
// import DiceRoll from "./components/DiceRoll";

// import ParentDetailCard from "./components/ParentDetailCard/ParentDetailCard";
// import Accordion from "./components/Accordion/Accordion";
// import Day9 from "./components/Day9/Day9";
// import Day13 from "./components/Day13/Day13";
// import Day14 from "./components/Day14/Day14";
// import Day14Throttling from "./components/Day14Throttling/Day14Throttling";
// import Day8 from "./components/Day8/Day8";
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

  return (
    <>
      <main>
        {/* <Day6 /> */}
        {/* <Day8 /> */}
        {/* <Day9 />
        <DiceRoll />
        <ParentDetailCard
          title={"SDE-1"}
          desc={"He is a happy mannnnnnnnnnnnnnnnnnnnnn!"}
          img={
            "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Accordion /> */}
        {/* <Day13 /> */}
        {/* <Day14 />
        <Day14Throttling /> */}
        <Day15 />
      </main>
    </>
  );
}

export default App;
