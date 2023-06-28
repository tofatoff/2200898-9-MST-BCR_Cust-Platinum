import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import HeaderNav from "../../components/Navbar";

import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import OurServices from "./components/OurServices";
import Testimonial from "./components/Testimonial";
import WhyUs from "./components/WhyUs";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <Hero showBtnCTA="1" />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
