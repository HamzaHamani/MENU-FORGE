function Aboutus() {
  return (
    // fix why sticky doesnt work on second section
    <section className="sticky top-0 bg-primary mt-24 p-10 h-screen  text-white z-10">
      {/* when i added div here with stcky top 0 it worked but not as expected */}

      {/* todo add section with this https://www.youtube.com/watch?v=VhXemORYup8&t=292s */}
      <div className="">
        <h2 className="text-3xl tracking-wider text-accent flex gap-6 items-center mb-8">
          <span className="text-6xl">-</span> WHO WE ARE
        </h2>
        <div className="flex gap-10 ">
          <div className="flex-grow w-[30%]">
            <div className="flex flex-col gap-14 mt-16">
              <h2 className="text-6xl flex-grow w-fit font-medium ">
                We Help to Get Solutions
              </h2>
              <p className=" text-2xl text-gray-200 w-[78%] mb-20  font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </p>
            </div>
            <div className="w-fit flex">
              <div className="flex items-center justify-center gap-6">
                <img
                  src="../../../public/rocket.svg"
                  alt="rocket svg icon"
                  className="scale-90"
                />
                <div className="flex flex-col gap-4">
                  <h2 className="text-4xl">Lorem Ipsum</h2>
                  <p className="w-[75%] text-gray-200 text-base  font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6">
                <img
                  src="../../../public/idea.svg"
                  alt="idea svg icon"
                  className="scale-90"
                />
                <div className="flex flex-col gap-4">
                  <h2 className="text-4xl">Lorem Ipsum</h2>
                  <p className="w-[75%] text-gray-200 text-base font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-accent p-10 py-3 text-xl text-black mt-20">
              Read More
            </button>
          </div>
          <div className="relative">
            <div className="w-[626px] h-[600px] bg-slate-600 object-contain rounded-lg overflow-hidden relative">
              <img
                src="../../../public/contact.jpg"
                className="object-contain imgfit"
              />
            </div>
            <div className="bg-white text-black  flex w-[485px] h-[286px] mx-auto p-8 rounded-lg flex-col items-center justify-evenly absolute -bottom-24 right-20">
              <p className=" text-lg  font-medium">
                Lorem Ipsum is simply dummy
              </p>
              <h2 className="text-3xl font-medium -mt-3 text-primary">
                Looking for help?
              </h2>
              <p className=" w-[80%] self-center text-center -mt-3 text-gray-900">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
