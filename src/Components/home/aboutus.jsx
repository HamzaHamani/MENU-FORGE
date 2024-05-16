function Aboutus() {
  return (
    // fix why sticky doesnt work on second section
    <section className="sticky top-0 z-10 mt-24 h-screen bg-primary  p-10 text-white">
      {/* when i added div here with stcky top 0 it worked but not as expected */}

      {/* todo add section with this https://www.youtube.com/watch?v=VhXemORYup8&t=292s */}
      <div className="">
        <h2 className="mb-8 mt-14 flex items-center gap-6 text-3xl tracking-wider text-accent">
          <span className="text-6xl">-</span> WHO WE ARE
        </h2>
        <div className="flex gap-10 ">
          <div className="w-[30%] flex-grow">
            <div className="mt-16 flex flex-col gap-14">
              <h2 className="w-fit flex-grow text-6xl font-medium ">
                We Help to Get Solutions
              </h2>
              <p className=" mb-20 w-[78%] text-2xl font-light  text-gray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </p>
            </div>
            <div className="flex w-fit">
              <div className="flex items-center justify-center gap-6">
                <img
                  src="../../../public/rocket.svg"
                  alt="rocket svg icon"
                  className="scale-90"
                />
                <div className="flex flex-col gap-4">
                  <h2 className="text-4xl">Lorem Ipsum</h2>
                  <p className="w-[75%] text-base font-light  text-gray-200">
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
                  <p className="w-[75%] text-base font-light text-gray-200">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-20 bg-accent p-10 py-3 text-xl text-black">
              Read More
            </button>
          </div>
          <div className="relative">
            <div className="relative h-[600px] w-[626px] overflow-hidden rounded-lg bg-slate-600 object-contain">
              <img
                src="../../../public/contact.jpg"
                className="imgfit object-contain"
              />
            </div>
            <div className="absolute -bottom-24  right-20 mx-auto flex h-[286px] w-[485px] flex-col items-center justify-evenly rounded-lg bg-white p-8 text-black">
              <p className=" text-lg  font-medium">
                Lorem Ipsum is simply dummy
              </p>
              <h2 className="-mt-3 text-3xl font-medium text-primary">
                Looking for help?
              </h2>
              <p className=" -mt-3 w-[80%] self-center text-center text-gray-900">
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
