import { useEffect, useState } from "react";

const useDimension = () => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  const updateDimenstion = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({
      width: innerWidth,
      height: innerHeight,
    });
  };
  useEffect(() => {
    updateDimenstion();
    window.addEventListener("resize", updateDimenstion);
    return () => window.removeEventListener("resize", updateDimenstion);
  }, []);

  return dimension;
};
export default useDimension;
