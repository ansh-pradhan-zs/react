import { useState } from "react";
import "./accordion.css";

export function MenuItem({ title, body }) {
  const [openState, setOpenState] = useState(false);
  return (
    <div className="child-container-accordion">
      <div className="label" onClick={() => setOpenState(!openState)}>
        <span>{title}</span>
        <span
          aria-hidden={true}
          className={
            openState
              ? "accordion-icon-rotated accordion-icon"
              : "accordion-icon"
          }
        />
      </div>
      {openState && <div className="content">{body}</div>}
    </div>
  );
}
