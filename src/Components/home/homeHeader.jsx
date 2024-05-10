import { IoIosCreate } from "react-icons/io";
import { IoCloudUpload, IoLogIn } from "react-icons/io5";
function HomeHeader() {
  return (
    <>
      <section className="flex justify-evenly mx-auto gap-12  w-[1700px]  mb-5">
        <div className=" flex flex-col gap-9 justify-center w-fit ">
          <h2 className="text-7xl texthe font-medium w-fit leading-[1.05] ">
            New designs <br /> New inspirations
          </h2>

          <p className="w-[40%] text-gray-700 text-[17px] aeonik">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            excepturi. Rerum iusto temporibus hic veritatis. Incidunt quos ullam
            minima es
          </p>
          <button className="self-start bg-primary p-3 px-14 text-lg text-white rounded-full ">
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
      <section className="bg-primary flex gap-6 text-white p-10 rounded-3xl w-[80%] mx-auto py-10 shadow-2xl shadow-black/30">
        <div className="p-4 flex flex-col gap-6">
          <h2 className="text-3xl flex items-center gap-5">
            Create{" "}
            <span className="text-lg">
              <IoIosCreate />
            </span>
          </h2>
          <p className="w-[80%] text-gray-200 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quaerat.
          </p>
        </div>
        <div className="p-4 flex flex-col gap-6">
          <h2 className="text-3xl flex items-center gap-5">
            Sign in{" "}
            <span className="text-lg">
              <IoLogIn />
            </span>
          </h2>
          <p className="w-[80%] text-gray-200 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quaerat.
          </p>
        </div>
        <div className="p-4 flex flex-col gap-6">
          <h2 className="text-3xl flex items-center gap-5">
            Upload{" "}
            <span className="text-lg">
              <IoCloudUpload />
            </span>
          </h2>
          <p className="w-[80%] text-gray-200 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quaerat.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomeHeader;
