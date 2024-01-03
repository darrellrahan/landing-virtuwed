import "server-only";

interface Dictionary {
  header: string[];
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  id: () => import("../dictionaries/id.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
