import "server-only";

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

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  id: () => import("../dictionaries/id.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
