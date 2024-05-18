import Aboutus from "../Components/home/aboutus";
import Contact from "../Components/home/contact";
import HomeHeader from "../Components/home/homeHeader";
import Footer from "./footer";
import Sloganslider from "./sloganslider";

function Home() {
  return (
    <section>
      <div className="">
        <HomeHeader />
        <Aboutus />
      </div>
      {/* <Sloganslider /> */}
      <Contact />
      {/* contact form my update it i dont like the design ofit */}
      <Footer />
      {/* <div className="h-screen"></div> */}
    </section>
  );
}

export default Home;
