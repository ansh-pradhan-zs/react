import { useEffect, useState } from "react";

export const useComponentSize = (ref) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let refComp = ref.current;
    const updateSize = () => {
      if (refComp) {
        const { width, height } = ref.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);

    if (refComp) {
      resizeObserver.observe(refComp);
    }

    return () => {
      if (refComp) {
        resizeObserver.unobserve(refComp);
      }
    };
  }, []);

  return size;
};
