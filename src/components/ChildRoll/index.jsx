import "./index-child.css";
import dice1 from "../../assets/dice-1.png";
import dice2 from "../../assets/dice-2.png";
import dice3 from "../../assets/dice-3.png";
import dice4 from "../../assets/dice-4.png";
import dice5 from "../../assets/dice-5.png";
import dice6 from "../../assets/dice-6.png";

const ChildRoll = ({ diceRollCount }) => {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <div className="child-container">
      <div className="grid-container">
        {dices.slice(0, diceRollCount).map((dice, ind) => {
          return <img key={ind} src={dice} alt="dice one" />;
        })}
      </div>
    </div>
  );
};

export default ChildRoll;
