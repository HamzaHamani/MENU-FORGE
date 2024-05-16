/* eslint-disable react/prop-types */

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import useDimension from "../../utils/useDimension";

const images = [
  "https://images.unsplash.com/photo-1625173616412-7b403d49a41e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551489186-c892fa1428c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1613420471688-009b97bc5655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVudXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664189122862-d4f77cdafcab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1545418314-7ce0b9b53901?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1lbnV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1623667322051-18662ce6334c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1lbnV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1619266912968-9a22e71ea993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1lbnV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1599172995721-49309fff2f21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG1lbnV8ZW58MHx8MHx8fDA%3D",
];

function Sliders() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * -0.7]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 0.3]);

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * -0.8]);

  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height * -0.7]);
  return (
    <section
      className="columnChilds mt-28 flex flex-wrap justify-around"
      ref={container}
    >
      <Column images={[images[0], images[1]]} y={y} top={true} />
      <Column images={[images[2], images[3]]} y={y2} top2={true} />
      <Column images={[images[4], images[5]]} y={y3} top3={true} />
      <Column images={[images[6], images[7]]} y={y4} top4={true} />
      <Column images={[images[8], images[9]]} y={y5} top5={true} />
    </section>
  );
}

export default Sliders;

const Column = ({ images, top, y = 0, top2, top3, top4, top5 }) => {
  return (
    <motion.div
      style={{ y }}
      className={`relative ${top ? "top-40" : ""} ${top2 ? "-top-60" : ""}  ${top3 ? "top-48" : ""} ${top4 ? "-top-80" : ""} ${top5 ? "top-56" : ""} col flex flex-col gap-2`}
    >
      {images.map((image) => (
        <div
          key={image}
          className={`h-[510px] w-[330px] rounded-3xl  bg-gray-200  ${top ? "top[45%]" : "top-2 shadow-sm"}`}
        >
          <img
            src={image}
            alt="slider"
            className="h-full w-full rounded-3xl object-cover contrast-75 saturate-100"
          />
        </div>
      ))}
    </motion.div>
  );
};
