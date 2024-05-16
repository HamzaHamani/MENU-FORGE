/* eslint-disable react/prop-types */

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function Sliders() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  return (
    <section className="mt-28 flex justify-around" ref={container}>
      <Column images={[images[0], images[1]]} y={y} />
      <Column images={[images[2], images[3]]} top={true} />
      <Column images={[images[4], images[5]]} />
      <Column images={[images[6], images[7]]} top={true} />
      <Column images={[images[8], images[9]]} />
    </section>
  );
}

export default Sliders;

const Column = ({ images, top, y = 0 }) => {
  return (
    <motion.div
      style={{ y }}
      className={`flex flex-col gap-2 ${top ? "-mt-20" : "mt-0"}`}
    >
      {images.map((image) => (
        <div
          key={image}
          className={`h-[490px] w-[320px] rounded-3xl  bg-gray-200 `}
        ></div>
      ))}
    </motion.div>
  );
};
