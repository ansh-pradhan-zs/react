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
import { FaQuestion } from "react-icons/fa";
// assets import
import day6 from "./assets/day6.mov";
import day8 from "./assets/day8.mov";
import diceRoll from "./assets/diceRoll.mov";
import parentComp from "./assets/parentDetail.png";
import day9 from "./assets/day9.png";
import accordion from "./assets/accordion.mov";
import day13 from "./assets/day13.mov";
import day14 from "./assets/day14.mov";
import day14Throttle from "./assets/day14Throttle.png";
import day15 from "./assets/day15.mov";
import ThankYou from "./components/ThankYou";

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
    <main>
      {index === 0 && (
        <section className="m-5 flex flex-col items-center gap-8 pt-10">
          <span className="text-3xl font-bold">Training Journey...</span>
          <div className="flex flex-col gap-4 bg-gray-200 p-4 rounded-lg">
            {/* div 1 */}
            <div className="flex h-[400px] w-[90vw] gap-4 ">
              {/* day 6 */}
              <div
                onClick={() => setIndex(1)}
                className="h-full w-[100%] bg-amber-50 rounded-lg relative hover:scale-105 transition transform duration-200"
              >
                <video
                  src={day6}
                  className="object-cover w-full h-full rounded-lg"
                  loop
                  autoPlay
                ></video>
              </div>
              <div className="flex w-full flex-col gap-4 h-full">
                {/* day 8 */}
                <div
                  className="h-[46%] w-full bg-amber-50 rounded-lg hover:scale-105 transition transform duration-200"
                  onClick={() => setIndex(2)}
                >
                  <video
                    src={day8}
                    className="object-cover w-full h-full rounded-lg"
                    loop
                    autoPlay
                  ></video>
                </div>
                {/* dice roll */}
                <div
                  onClick={() => setIndex(3)}
                  className="h-[50%] w-full bg-amber-50 rounded-lg hover:scale-105 transition transform duration-200"
                >
                  <video
                    src={diceRoll}
                    className="object-cover w-full h-full rounded-lg "
                    loop
                    autoPlay
                  ></video>
                </div>
              </div>
            </div>
            {/* div 2 */}
            <div className="flex gap-4">
              {/* parent  */}
              <div
                onClick={() => setIndex(4)}
                className="h-[200px] w-[33%] bg-amber-50 rounded-lg hover:scale-105 transition transform duration-200"
              >
                <img
                  src={parentComp}
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              {/* ? */}
              <div
                onClick={() => setIndex(11)}
                className="h-[200px] w-[33%] bg-amber-50 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-200"
              >
                <FaQuestion size={50} />
              </div>
              {/* day 9 */}
              <div
                onClick={() => setIndex(5)}
                className="h-[200px] w-[33%] bg-amber-50 rounded-lg hover:scale-105 transition transform duration-200"
              >
                <img
                  src={day9}
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
            {/* div 3 */}
            <div className="flex h-[300px] gap-4">
              <div className="flex h-full w-full flex-col gap-4">
                {/* accordion */}
                <div
                  onClick={() => setIndex(6)}
                  className="h-[45%] w-full bg-amber-50 rounded-lg hover:scale-105 transition transform duration-200"
                >
                  <video
                    src={accordion}
                    className="object-cover w-full h-full rounded-lg"
                    loop
                    autoPlay
                  ></video>
                </div>
                {/* day 13 */}
                <div
                  onClick={() => setIndex(7)}
                  className="h-[50%] w-full bg-amber-50 rounded-lg hover:scale-105 transition transform duration-200"
                >
                  <video
                    src={day13}
                    className="object-cover w-full h-full rounded-lg"
                    loop
                    autoPlay
                  ></video>
                </div>
              </div>
              {/* day 15 */}
              <div
                onClick={() => setIndex(8)}
                className="h-full w-[90%] bg-amber-50 rounded-lg hover:scale-105 transition transform duration-200"
              >
                <video
                  src={day15}
                  className="object-cover w-full h-full rounded-lg"
                  loop
                  autoPlay
                ></video>
              </div>
              <div className="flex h-full w-[50%] flex-col gap-4">
                {/* day 14 throttle*/}
                <div
                  onClick={() => setIndex(9)}
                  className="h-[45%] w-full bg-amber-50 rounded-lg hover:scale-105 transition transform duration-200"
                >
                  <img
                    src={day14Throttle}
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                {/* day 14 */}
                <div
                  onClick={() => setIndex(10)}
                  className="h-[50%] w-full bg-amber-50 rounded-lg hover:scale-105 transition transform duration-200"
                >
                  <video
                    src={day14}
                    className="object-cover w-full h-full rounded-lg"
                    loop
                    autoPlay
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      {index === 11 && <ThankYou />}
    </main>
  );
  // return (
  //   <>
  //     <main
  //       className={
  //         index === 0
  //           ? "flex flex-col items-center justify-center w-[100vw] h-[100vh]"
  //           : ""
  //       }
  //     >
  //       {/* Mission Control */}
  //       {index === 0 && (
  //         <div className="flex flex-col items-center gap-10">
  //           <span className="text-4xl font-bold">Training Journey...</span>
  //           <div className="grid grid-cols-5 gap-10">
  //             {assignments.map((item, index) => {
  //               return (
  //                 <button
  //                   className="bg-blue-500 rounded-md p-4 text-white"
  //                   key={index}
  //                   onClick={() => setIndex(index + 1)}
  //                 >
  //                   {item}
  //                 </button>
  //               );
  //             })}
  //           </div>
  //         </div>
  //       )}
  //       {index === 1 && <Day6 />}
  //       {index === 2 && <Day8 />}
  //       {index === 3 && <DiceRoll />}
  //       {index === 4 && (
  //         <ParentDetailCard
  //           title={"SDE-1"}
  //           desc={"He is a happy mannnnnnnnnnnnnnnnnnnnnn!"}
  //           img={
  //             "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //           }
  //         />
  //       )}
  //       {index === 5 && <Day9 />}
  //       {index === 6 && <Accordion />}
  //       {index === 7 && <Day13 />}
  //       {index === 8 && <Day14 />}
  //       {index === 9 && <Day14Throttling />}
  //       {index === 10 && <Day15 />}
  //     </main>
  //   </>
  // );
}

export default App;
