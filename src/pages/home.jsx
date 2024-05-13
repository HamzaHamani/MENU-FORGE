import Aboutus from "../Components/home/aboutus";
import Contact from "../Components/home/contact";
import HomeHeader from "../Components/home/homeHeader";

function Home() {
  return (
    <section>
      <div className="">
        <HomeHeader />
        <Aboutus />
      </div>
      <Contact />
    </section>
  );
}

export default Home;
