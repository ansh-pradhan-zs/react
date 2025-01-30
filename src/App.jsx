import "./App.css";
import DiceRoll from "./components/DiceRoll";

import ParentDetailCard from "./components/ParentDetailCard/ParentDetailCard";
import Accordion from "./components/Accordion/Accordion";
import Day9 from "./components/Day9/Day9";

function App() {
  return (
    <>
      <main>
        <Day9 />
        <DiceRoll />
        <ParentDetailCard
          title={"SDE-1"}
          desc={"He is a happy mannnnnnnnnnnnnnnnnnnnnn!"}
          img={
            "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Accordion />
      </main>
    </>
  );
}

export default App;
