import Aboutus from "../Components/home/aboutus";
import Contact from "../Components/home/contact";
import HomeHeader from "../Components/home/homeHeader";
import Sloganslider from "./sloganslider";

function Home() {
  return (
    <section>
      <div className="">
        <HomeHeader />
        <Aboutus />
      </div>
      <Contact />
      <Sloganslider />
      <div className="h-screen"></div>
    </section>
  );
}

export default Home;
