import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IoIosCreate } from "react-icons/io";

import { IoCloudUpload, IoLogIn } from "react-icons/io5";
function HomeHeader() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -8]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="-z-9 sticky top-0 bg-background"
    >
      <section className="mx-auto mb-5 flex w-[1700px]  justify-evenly  gap-12">
        <div className=" flex w-fit flex-col justify-center gap-9 ">
          <h2 className="texthe w-fit text-7xl font-medium leading-[1.05] ">
            New designs <br /> New inspirations
          </h2>

          <p className="aeonik w-[40%] text-[17px] text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            excepturi. Rerum iusto temporibus hic veritatis. Incidunt quos ullam
            minima es
          </p>
          <button className="self-start rounded-full bg-primary p-3 px-14 text-lg text-white ">
            Explore
          </button>
        </div>
        <div>
          <img
            src={"../../public/home.png"}
            alt="home"
            className="mix-blend-multiply"
          />
        </div>
      </section>
      <section className="-z-10 mx-auto flex w-[80%] gap-6 rounded-3xl bg-primary p-10 py-10 text-white shadow-2xl shadow-black/30">
        <div className="flex flex-col gap-6 p-4">
          <h2 className="flex items-center gap-5 text-3xl">
            Create{" "}
            <span className="text-lg">
              <IoIosCreate />
            </span>
          </h2>
          <p className="w-[80%] text-[16px] text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quaerat.
          </p>
        </div>
        <div className="flex flex-col gap-6 p-4">
          <h2 className="flex items-center gap-5 text-3xl">
            Sign in{" "}
            <span className="text-lg">
              <IoLogIn />
            </span>
          </h2>
          <p className="w-[80%] text-[16px] text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quaerat.
          </p>
        </div>
        <div className="flex flex-col gap-6 p-4">
          <h2 className="flex items-center gap-5 text-3xl">
            Upload{" "}
            <span className="text-lg">
              <IoCloudUpload />
            </span>
          </h2>
          <p className="w-[80%] text-[16px] text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quaerat.
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default HomeHeader;
