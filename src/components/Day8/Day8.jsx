import { useEffect, useState } from "react";
import Form from "./Form";

const Day8 = () => {
  function generateDynamicButtons(num) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      const buttonName = "Button " + i;
      const newButton = { name: buttonName };
      arr.push(newButton);
    }
    return arr;
  }

  const buttons = generateDynamicButtons(9);

  const [buttonColors, setButtonColors] = useState(
    Array(buttons.length).fill("black")
  );
  const [clickCount, setClickCount] = useState(0);

  const [clickedButtons, setClickedButtons] = useState([]);

  function handleButtonClick(index) {
    if (clickedButtons.length === 4) return;

    if (clickedButtons.includes(index)) return;
    setClickedButtons((prev) => [...prev, index]);
    if (clickCount < 4) {
      changeColor(index);
      setClickCount((clickCount) => clickCount + 1);
    }
  }

  useEffect(() => {
    if (clickedButtons.length === 4) {
      setTimeout(() => {
        let index = 4;
        const intervalId = setInterval(() => {
          if (index >= 0) {
            setButtonColors((prevColors) =>
              prevColors.map((color, i) =>
                i == clickedButtons[index] ? "black" : color
              )
            );
            index--;
          } else {
            clearInterval(intervalId);
            setClickedButtons([]);
            setClickCount(0);
          }
        }, 500);
      }, 1000);
    }
  }, [clickedButtons]);

  function changeColor(index) {
    setButtonColors((prevColors) =>
      prevColors.map((color, i) => (i === index ? "pink" : color))
    );
  }
  return (
    <div>
      <Form />
      <div className="grid grid-cols-3 gap-5">
        {buttons.map((button, ind) => {
          return (
            <button
              id={button.name}
              onClick={() => handleButtonClick(ind)}
              key={ind}
              className={` text-white p-3 rounded-md`}
              style={{
                backgroundColor: buttonColors[ind],
              }}
            >
              {button.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Day8;
