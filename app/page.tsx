import Award from "./components/Award";
import Faq from "./components/Faq";
import GeneralFeatures from "./components/GeneralFeatures";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import Pricing from "./components/Pricing";
import SpecificFeatures from "./components/SpecificFeatures";
import Testimonial from "./components/Testimonial";
import Video from "./components/Video";

export default function Home() {
  return (
    <>
      <Header />
      <MobileNavbar />
      <Hero />
      <Award />
      <GeneralFeatures />
      <SpecificFeatures />
      <Pricing />
      <Testimonial />
      <Video />
      <Faq />
    </>
  );
}
