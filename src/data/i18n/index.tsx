import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "src/data/i18n/en.json";
import ar from "src/data/i18n/ar.json";

const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  ar: {
    translation: {
      ...ar,
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("locale") || "en",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export function translateCell(cell: string) {
  return i18n.t(cell);
}

export default i18n;
