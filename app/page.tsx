import Award from "./components/Award";
import GeneralFeatures from "./components/GeneralFeatures";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import Pricing from "./components/Pricing";
import SpecificFeatures from "./components/SpecificFeatures";

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
    </>
  );
}
