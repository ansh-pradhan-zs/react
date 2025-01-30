import { useState } from "react";
import ChildRoll from "../ChildRoll";
import "./index.css";
const DiceRoll = () => {
  const [diceRollCount, setDiceRollCount] = useState(0);
  const [diceInput, setDiceInput] = useState(0);
  const [error, setError] = useState("");
  const [diceArr, setDiceArr] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (diceInput < 1 || diceInput > 6) {
      setError("The dice input should be between 1 and 6.");
      setDiceInput(0);
      setDiceRollCount(0);
      return;
    }

    setDiceRollCount(diceInput);
    setDiceArr(generateDices(diceInput));
  }

  function generateDices(diceInput) {
    let arr = [];
    for (let i = 1; i <= diceInput; i++) {
      let obj = {};
      if (i != diceInput) {
        obj["a"] = i;
        obj["b"] = diceInput - i;
        arr.push(obj);
      }
    }
    return arr;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="input-grp">
        <input
          type="number"
          name="number"
          id="number"
          value={diceInput}
          onChange={(e) => {
            setError("");
            setDiceInput(e.target.value);
          }}
        />
        {error && <span className="error">{error}</span>}
        <button type="submit">Roll</button>
      </form>
      <ChildRoll diceArr={diceArr} />
    </div>
  );
};

export default DiceRoll;
