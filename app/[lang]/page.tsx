import Award from "../components/Award";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import GeneralFeatures from "../components/GeneralFeatures";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileNavbar from "../components/MobileNavbar";
import Pricing from "../components/Pricing";
import SpecificFeatures from "../components/SpecificFeatures";
import Testimonial from "../components/Testimonial";
import Video from "../components/Video";
import { getDictionary } from "../dictionaries";

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <Header dict={dict.header} lang={params.lang} />
      <MobileNavbar dict={dict.header} lang={params.lang} />
      <Hero />
      <Award />
      <GeneralFeatures />
      <SpecificFeatures />
      <Pricing />
      <Testimonial />
      <Video />
      <Faq />
      <Footer />
    </>
  );
}
