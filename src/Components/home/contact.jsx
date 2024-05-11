import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="h-screen bg-accent   p-10 ">
      <h2 className="text-4xl font-medium tracking-wider text-primary flex gap-6 items-center mb-2">
        <span className="text-6xl">-</span> Contact Us
      </h2>
      <p className="text-lg font-medium">
        {" "}
        Any question or remarks? Just write us a message!
      </p>
      <div className="flex gap-10 mt-14 px-28">
        <div className="bg-primary flex flex-col justify-around gap-10 text-white p-10 rounded-md h-[650px] w-[550px]">
          <div className="space-y-2">
            <h2 className="text-4xl">Contact information</h2>
            <p className="text-xl text-gray-200 font-light">
              Fell free to ask us anything{" "}
            </p>
          </div>
          <ul className="flex flex-col gap-9">
            <li className="flex items-center gap-6  font-light w-[70%]">
              <span className="text-2xl">
                <FaLocationDot />
              </span>{" "}
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </li>
            <li className="flex items-center gap-6  font-light w-[70%]">
              <span className="text-2xl">
                <FaPhoneVolume />
              </span>{" "}
              +1012 3456 789
            </li>
            <li className="flex items-center gap-6  font-light w-[70%]">
              {" "}
              <span className="text-2xl">
                <IoMdMailOpen />
              </span>{" "}
              demo@gmail.com
            </li>
          </ul>
          <div>
            <ul className="flex gap-4 items-center cursor-pointer">
              <li className="bg-accent w-fit p-3 rounded-full text-black text-xl">
                <FaInstagram />
              </li>
              <li className="bg-accent w-fit p-3 rounded-full text-black text-xl cursor-pointer">
                <FaWhatsapp />
              </li>
            </ul>
          </div>
        </div>
        <div>right</div>
      </div>
    </section>
  );
}

export default Contact;
