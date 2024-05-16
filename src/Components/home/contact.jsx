import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="h-screen bg-primary p-10  text-white ">
      <h2 className="mb-2 mt-14 flex items-center gap-6 text-4xl font-medium tracking-wider text-accent">
        <span className="text-6xl">-</span> Contact Us
      </h2>
      <p className="text-lg font-medium">
        {" "}
        Any question or remarks? Just write us a message!
      </p>
      <div className="mt-20 flex gap-10 px-28">
        <section className="flex h-[680px] w-[800px] flex-col justify-around gap-10 rounded-md bg-accent p-10 text-black">
          <div className="space-y-2">
            <h2 className="text-4xl">Contact information</h2>
            {/* <p className="text-xl font-light text-gray-800">
              Fell free to ask us anything{" "}
            </p> */}
          </div>
          <ul className="flex flex-col gap-9">
            <li className="flex w-[70%] items-center  gap-6 font-light">
              <span className="text-2xl">
                <FaLocationDot />
              </span>{" "}
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </li>
            <li className="flex w-[70%] items-center  gap-6 font-light">
              <span className="text-2xl">
                <FaPhoneVolume />
              </span>{" "}
              +1012 3456 789
            </li>
            <li className="flex w-[70%] items-center  gap-6 font-light">
              {" "}
              <span className="text-2xl">
                <IoMdMailOpen />
              </span>{" "}
              demo@gmail.com
            </li>
          </ul>
          <div>
            <ul className="flex cursor-pointer items-center gap-4">
              <li className="w-fit rounded-full bg-accent p-3 text-xl text-black">
                <FaInstagram />
              </li>
              <li className="w-fit cursor-pointer rounded-full bg-accent p-3 text-xl text-black">
                <FaWhatsapp />
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-red flex w-full flex-col gap-12 p-8">
          {/* start first name last name */}
          <div className="mt-8 ">
            <div className="flex justify-between gap-20">
              <div className="flex-1 ">
                <label
                  className="block text-lg font-medium text-gray-100"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="mt-1 block w-full border-b border-gray-100 bg-primary  p-3 focus:border-indigo-300 focus:outline-none"
                  id="first-name"
                  name="first-name"
                  placeholder=""
                  type="text"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-lg font-medium text-gray-100"
                  htmlFor="first-name"
                >
                  Last Name
                </label>
                <input
                  className="mt-1 block w-full border-b border-gray-100 bg-primary  p-3 focus:border-indigo-300 focus:outline-none"
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
                  className="block text-lg font-medium text-gray-100"
                  htmlFor="first-name"
                >
                  Email
                </label>
                <input
                  className="mt-1 block w-full border-b border-gray-100 bg-primary  p-3 focus:border-indigo-300 focus:outline-none"
                  id="email"
                  name="email"
                  placeholder=""
                  type="email"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-lg font-medium text-gray-100"
                  htmlFor="first-name"
                >
                  Phone Number
                </label>
                <input
                  className="mt-1 block w-full border-b border-gray-100 bg-primary  p-3 focus:border-indigo-300 focus:outline-none"
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
                  className="block text-lg font-medium text-gray-100"
                  htmlFor="first-name"
                >
                  Message
                </label>
                <input
                  className="mt-1 block w-full border-b border-gray-100  bg-primary p-3 focus:outline-none"
                  id="message"
                  name="message"
                  placeholder=""
                  type="text"
                />
              </div>
            </div>
          </div>
          {/* END MESSAGE   */}
          <button className="items-end rounded-md bg-accent p-3 text-2xl  text-black">
            Send Message{" "}
          </button>
        </section>
      </div>
    </section>
  );
}

export default Contact;
