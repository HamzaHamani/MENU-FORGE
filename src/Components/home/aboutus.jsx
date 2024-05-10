function Aboutus() {
  return (
    <section className="bg-primary mt-28 p-10  text-white">
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
        <div className="bg-red-200">
          <div className="w-[626px] h-[600px] bg-slate-600 object-contain">
            <img
              src="../../../public/contact.jpg"
              className="object-contain imgfit"
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
