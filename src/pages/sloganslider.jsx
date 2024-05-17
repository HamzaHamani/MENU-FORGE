import Sliders from "../Components/home/sliders";

function Sloganslider() {
  return (
    <section className=" bg-background  ">
      <div className="mb-24  flex flex-col items-center justify-center p-9 ">
        <h3 className="mt-3 flex flex-col items-center text-6xl">
          Introducing the Future of <br></br>{" "}
          <span className="mt-2 font-bold text-primary">Restaurant Menus.</span>
        </h3>
        <h2 className="mt-2 text-6xl">Get to know them</h2>
      </div>
      <div className="mt-10 h-[100%] overflow-hidden bg-background ">
        <Sliders />
      </div>
    </section>
  );
}

export default Sloganslider;
