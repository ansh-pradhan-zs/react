import "./index-child.css";
import dice1 from "../../assets/dice-1.png";
import dice2 from "../../assets/dice-2.png";
import dice3 from "../../assets/dice-3.png";
import dice4 from "../../assets/dice-4.png";
import dice5 from "../../assets/dice-5.png";
import dice6 from "../../assets/dice-6.png";
import { LuLoaderCircle } from "react-icons/lu";
import { useEffect, useState } from "react";

const ChildRoll = ({ diceRollCount, isLoading }) => {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [shownDice, setShownDice] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setShownDice([]); // Reset dice visibility on re-render
      dices.slice(0, diceRollCount).forEach((dice, index) => {
        setTimeout(() => {
          setShownDice((prev) => [...prev, dice]);
        }, index * 1000);
      });
    }
  }, [diceRollCount, isLoading]);

  return (
    <div className="child-container">
      <div className="grid-container">
        {isLoading ? (
          <LuLoaderCircle className="loader" size={36} color="purple" />
        ) : (
          shownDice.map((dice, ind) => (
            <img key={ind} src={dice} alt={`dice ${ind + 1}`} />
          ))
        )}
      </div>
    </div>
  );
};

export default ChildRoll;
