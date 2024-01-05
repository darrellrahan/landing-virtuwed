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

interface Dictionary {
  header: string[];
  hero: {
    heading: string;
    subheading: string;
    button: string;
    video: string;
  };
  award: string;
  feature: {
    heading: string;
    subheading: string;
    features: {
      title: string;
      body: string;
    }[];
  };
  value: {
    title: string;
    body: string;
  }[];
  pricing: {
    heading: string;
    subheading: string;
    lite: string[];
    priority: string[];
  };
  review: {
    heading: string;
    subheading: string;
  };
  video: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <Header dict={dict.header} lang={params.lang} />
      <MobileNavbar dict={dict.header} lang={params.lang} />
      <Hero dict={dict.hero} />
      <Award dict={dict.award} />
      <GeneralFeatures dict={dict.feature} />
      <SpecificFeatures dict={dict.value} />
      <Pricing dict={dict.pricing} />
      <Testimonial dict={dict.review} />
      <Video dict={dict.video} />
      <Faq dict={dict.faq} />
      <Footer />
    </>
  );
}
