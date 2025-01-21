import "./index-child.css";
import dice1 from "../../assets/dice-1.png";
import dice2 from "../../assets/dice-2.png";
import dice3 from "../../assets/dice-3.png";
import dice4 from "../../assets/dice-4.png";
import dice5 from "../../assets/dice-5.png";
import dice6 from "../../assets/dice-6.png";
import { useEffect, useState } from "react";

const ChildRoll = ({ diceArr }) => {
  const [dices, setDices] = useState([]);

  function addDices() {
    let currDices = [];
    diceArr.map((item) => {
      currDices.push(`dice${item.a}`);
      currDices.push(`dice${item.b}`);
    });
    return currDices;
  }

  useEffect(() => {
    setDices(addDices());
  }, [diceArr]);

  return (
    <div className="child-container">
      <div className="grid-container">
        {dices.map((item, ind) => {
          return (
            <img
              src={
                item === "dice1"
                  ? dice1
                  : item === "dice2"
                  ? dice2
                  : item === "dice3"
                  ? dice3
                  : item === "dice4"
                  ? dice4
                  : item === "dice5"
                  ? dice5
                  : item === "dice6"
                  ? dice6
                  : null
              }
              alt="dice pic"
              key={ind}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChildRoll;
