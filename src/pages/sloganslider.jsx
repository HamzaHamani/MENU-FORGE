import Sliders from "../Components/home/sliders";

function Sloganslider() {
  return (
    <section className="h-screen overflow-hidden bg-primary text-white">
      <div className="flex  flex-col items-center justify-center p-9 ">
        <h3 className="mt-3 flex flex-col items-center text-6xl">
          Introducing the Future of <br></br>{" "}
          <span className="mt-2 font-medium text-accent">
            Restaurant Menus.
          </span>
        </h3>
        <h2 className="mt-2 text-6xl">Get to know them</h2>
      </div>
      <div className="overflow-hidden">
        <Sliders />
      </div>
    </section>
  );
}

export default Sloganslider;
