import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiResetRightLine } from "react-icons/ri";
import { useReducer } from "react";
import "./day6.css";
import { useTheme } from "../../contexts/ThemeContext2";
import { reducer } from "../../reducers/CountReducer";

const CounterAndTheme = () => {
  const { theme, getRandomTheme } = useTheme();

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div
      className="action-div1"
      style={{
        backgroundColor: `${theme}`,
      }}
      onDoubleClick={() => {
        getRandomTheme();
      }}
    >
      <span>Theme: {theme}</span>
      <div>
        <button
          className="btn1"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: "reset" });
          }}
          onDoubleClick={(e) => e.stopPropagation()}
        >
          <RiResetRightLine size={26} color="white" />
        </button>
        <div className="counter1">
          <button
            className="btn1"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "decrement" });
            }}
            onDoubleClick={(e) => e.stopPropagation()}
          >
            <FaMinus size={24} color="white" />
          </button>
          <span className="count1">Count: {state.count}</span>
          <button
            className="btn1"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "increment" });
            }}
            onDoubleClick={(e) => e.stopPropagation()}
          >
            <FaPlus size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterAndTheme;
