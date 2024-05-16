/* eslint-disable react/prop-types */

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import useDimension from "../../utils/useDimension";

const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function Sliders() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.4]);
  return (
    <section
      className="columnChilds mt-28 flex flex-wrap justify-around"
      ref={container}
    >
      <Column images={[images[0], images[1]]} y={y} top={true} />
      <Column images={[images[2], images[3]]} margin={true} />
      <Column images={[images[4], images[5]]} />
      <Column images={[images[6], images[7]]} margin={true} />
      <Column images={[images[8], images[9]]} />
    </section>
  );
}

export default Sliders;

const Column = ({ images, top, y = 0, margin }) => {
  return (
    <motion.div
      style={{ y }}
      className={`relative ${top ? "-top-80" : ""} flex flex-col gap-2 ${margin ? "-mt-20" : "mt-0"} col`}
    >
      {images.map((image) => (
        <div
          key={image}
          className={`h-[460px] w-[370px] rounded-3xl  bg-gray-200  ${top ? "top[45%]" : ""}`}
        ></div>
      ))}
    </motion.div>
  );
};
