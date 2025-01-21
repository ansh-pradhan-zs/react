import { useState } from "react";
import ChildRoll from "../ChildRoll";
import "./index.css";
const DiceRoll = () => {
  const [diceRollCount, setDiceRollCount] = useState(0);
  const [diceInput, setDiceInput] = useState(0);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (diceInput < 1 || diceInput > 6) {
      setError("The dice input should be between 1 and 6.");
      setDiceInput(0);
      return;
    }
    setDiceRollCount(diceInput);
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
      <ChildRoll diceRollCount={diceRollCount} />
    </div>
  );
};

export default DiceRoll;
