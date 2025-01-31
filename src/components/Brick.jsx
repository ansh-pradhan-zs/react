import React from "react";
import { FaQuestion } from "react-icons/fa";

const Brick = ({ setIndex, src, type, num }) => {
  if (num === 11) {
    return (
      <div
        onClick={() => setIndex(num)}
        className="h-[200px] w-[33%] bg-amber-50 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-200"
      >
        <FaQuestion size={50} />
      </div>
    );
  }

  return (
    <div
      onClick={() => setIndex(num)}
      className="h-full w-[100%] overflow-hidden bg-amber-50 rounded-lg relative  "
    >
      {type === "vid" ? (
        <video
          src={src}
          className="object-cover hover:scale-110  w-full h-full rounded-lg transition transform duration-200"
          loop
          autoPlay
        ></video>
      ) : (
        <img
          src={src}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      )}
    </div>
  );
};

export default Brick;
