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
      <div className="flex gap-10 mt-20 px-28">
        <section className="bg-primary flex flex-col justify-around gap-10 text-white p-10 rounded-md h-[680px] w-[800px]">
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
        </section>
        <section className="bg-red w-full p-8 flex flex-col gap-12">
          {/* start first name last name */}
          <div className="mt-8">
            <div className="flex justify-between gap-20">
              <div className="flex-1 ">
                <label
                  className="block text-lg font-medium text-gray-900"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="mt-1 block w-full border-b border-gray-900 focus:border-indigo-300  p-3 focus:outline-none bg-accent"
                  id="first-name"
                  name="first-name"
                  placeholder=""
                  type="text"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-lg font-medium text-gray-900"
                  htmlFor="first-name"
                >
                  Last Name
                </label>
                <input
                  className="mt-1 block w-full border-b border-gray-900 focus:border-indigo-300  p-3 focus:outline-none bg-accent"
                  id="first-name"
                  name="first-name"
                  placeholder=""
                  type="text"
                />
              </div>
            </div>
          </div>
          {/* end first name last name */}
          {/* start EMAIL  NUMBER  */}
          <div>
            <div className="flex justify-between gap-20">
              <div className="flex-1 ">
                <label
                  className="block text-lg font-medium text-gray-900"
                  htmlFor="first-name"
                >
                  Email
                </label>
                <input
                  className="mt-1 block w-full border-b border-gray-900 focus:border-indigo-300  p-3 focus:outline-none bg-accent"
                  id="email"
                  name="email"
                  placeholder=""
                  type="email"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-lg font-medium text-gray-900"
                  htmlFor="first-name"
                >
                  Phone Number
                </label>
                <input
                  className="mt-1 block w-full border-b border-gray-900 focus:border-indigo-300  p-3 focus:outline-none bg-accent"
                  id="phone-number"
                  name="phone-number"
                  placeholder=""
                  type="number"
                />
              </div>
            </div>
          </div>
          {/* END EMAIL NUMBER */}
          {/* start MESSAGE   */}
          <div>
            <div className="flex justify-between gap-20">
              <div className="flex-1">
                <label
                  className="block text-lg font-medium text-gray-900"
                  htmlFor="first-name"
                >
                  Message
                </label>
                <input
                  className="mt-1 block w-full border-b border-gray-900  p-3 focus:outline-none bg-accent"
                  id="message"
                  name="message"
                  placeholder=""
                  type="text"
                />
              </div>
            </div>
          </div>
          {/* END MESSAGE   */}
          <button className="bg-primary text-white text-2xl p-3 rounded-md  items-end">
            Send Message{" "}
          </button>
        </section>
      </div>
    </section>
  );
}

export default Contact;
