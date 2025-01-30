import { useRef } from "react";
import { useIsMounted } from "../../hooks/useIsMounted";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useComponentSize } from "../../hooks/useComponentSize";

const Day9 = () => {
  const { width, height } = useWindowSize();
  const isMounted = useIsMounted();
  const ref = useRef(null);
  const size = useComponentSize(ref);

  return (
    <div ref={ref} className="shadow-xl rounded-md flex flex-col gap-5 p-4">
      <span className="text-2xl">Day 9 Assignment</span>
      {/* useWindowSize hook */}
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col gap-4">
          <span className="text-xl bg-blue-400 w-fit p-2 px-4 rounded-md text-white">
            useWindowSize() Hook
          </span>
          <div className="flex flex-col gap-2">
            <span className="">Width: {width}</span>
            <span className="">Height: {height}</span>
          </div>
        </div>
        {/* useIsMounted hook */}
        <div className="flex flex-col gap-4">
          <span className="text-xl bg-blue-400 w-fit p-2 px-4 rounded-md text-white">
            useIsMounted() Hook
          </span>
          <div className="flex flex-col gap-2">
            <span className="">Is Mounted: {isMounted ? "Yes" : "No"}</span>
          </div>
        </div>
        {/* useComponentSize hook */}
        <div className="flex flex-col gap-4">
          <span className="text-xl bg-blue-400 w-fit p-2 px-4 rounded-md text-white">
            useComponentSize() Hook
          </span>
          <div className="flex flex-col gap-2">
            <span className="">Width: {size.width}</span>
            <span className="">Height: {size.height}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day9;
