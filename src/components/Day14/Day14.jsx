import { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar";
import "./day14.css";

const Day14 = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <main className="main-container4">
        {tooltips.map((item, i) => (
          <div className="card" key={i}>
            {i % 2 === 0 ? (
              <Button
                text={item.text}
                alignment={item.alignment}
                isShowSidebarBtn={i === 4 ? true : false}
                setShowSidebar={setShowSidebar}
              />
            ) : (
              <Hover text={item.text} alignment={item.alignment} />
            )}
          </div>
        ))}
      </main>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
    </>
  );
};

const Tooltip = ({ alignment, text, children, isButton }) => {
  const [showTT, setShowTT] = useState(false);
  const btnRef = useRef(null);

  const positionHover =
    alignment == "top"
      ? "pos-top"
      : alignment == "right"
      ? "pos-right"
      : alignment == "bottom"
      ? "pos-bottom"
      : alignment == "left"
      ? "pos-left"
      : null;

  const positionClick =
    alignment == "top"
      ? "pos-top-btn"
      : alignment == "right"
      ? "pos-right-btn"
      : alignment == "bottom"
      ? "pos-bottom-btn"
      : alignment == "left"
      ? "pos-left-btn"
      : null;

  useEffect(() => {
    function handleOutsideClick(e) {
      if (btnRef.current && !btnRef.current.contains(e.target)) {
        setShowTT(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [btnRef]);

  return (
    <div className="tt-container">
      {isButton ? (
        <span
          className="btn hover-span"
          ref={btnRef}
          onClick={() => setShowTT(!showTT)}
        >
          {children}
        </span>
      ) : (
        <span
          onMouseEnter={() => setShowTT(true)}
          onMouseLeave={() => setShowTT(false)}
          className="hover-span"
        >
          {children}
        </span>
      )}

      {showTT && (
        <span
          className={`${isButton ? positionClick : positionHover} hover-span`}
        >
          {text}
        </span>
      )}
    </div>
  );
};

const Button = ({ alignment, text, isShowSidebarBtn, setShowSidebar }) => {
  return (
    <Tooltip text={text} alignment={alignment} isButton={true}>
      <button
        onClick={() => {
          if (isShowSidebarBtn) {
            setShowSidebar(true);
          } else return;
        }}
        className="tt-btn"
      >
        Click me
      </button>
    </Tooltip>
  );
};

const Hover = ({ alignment, text }) => {
  return (
    <Tooltip text={text} alignment={alignment} isButton={false}>
      <span className="hover-span">Hover over me</span>
    </Tooltip>
  );
};

const tooltips = [
  {
    text: "Tool Tip 1",
    alignment: "top",
  },
  {
    text: "Tool Tip 2",
    alignment: "top",
  },
  {
    text: "Tool Tip 3",
    alignment: "right",
  },
  {
    text: "Tool Tip 4",
    alignment: "right",
  },
  {
    text: "Side bar",
    alignment: "bottom",
  },
  {
    text: "Tool Tip 6",
    alignment: "bottom",
  },
  {
    text: "Tool Tip 7",
    alignment: "left",
  },
  {
    text: "Tool Tip 8",
    alignment: "left",
  },
  {
    text: "Tool Tip 9",
    alignment: "top",
  },
];

export default Day14;
