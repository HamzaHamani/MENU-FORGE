function Aboutus() {
  return (
    <section className="bg-primary mt-28 p-10 h-screen  text-white">
      <h2 className="text-3xl text-accent flex gap-6 items-center mb-8">
        <span className="text-6xl">-</span> WHO WE ARE
      </h2>
      <div className="flex gap-10 ">
        <div className="flex-grow w-[30%]">
          <div className="flex flex-col gap-10">
            <h2 className="text-6xl flex-grow w-fit ">
              We Help to Get Solutions
            </h2>
            <p className=" text-lg w-[50%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,asdasdasdasdasd
            </p>
          </div>
          <div className="bg-stone-600 w-fit">
            <div>icon1</div>
            <div>icon2</div>
          </div>
          <button>Read More</button>
        </div>
        <div className="relative">
          <div className="w-[626px] h-[600px] bg-slate-600 object-contain rounded-lg overflow-hidden relative">
            <img
              src="../../../public/contact.jpg"
              className="object-contain imgfit"
            />
          </div>
          <div className="bg-white text-black  flex w-[485px] h-[286px] mx-auto p-8 rounded-lg flex-col items-center justify-evenly absolute -bottom-24 right-20">
            <p className="text-primary  font-medium">
              Lorem Ipsum is simply dummy
            </p>
            <h2 className="text-2xl font-medium -mt-3">Looking for help?</h2>
            <p className=" w-[80%] self-center text-center -mt-3 text-gray-900">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
