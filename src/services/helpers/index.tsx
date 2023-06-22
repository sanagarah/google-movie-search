import { LANGUAGES } from "src/data/enums";

const currentLang = localStorage.getItem("locale") || LANGUAGES.EN;

export const changeLang = () => {
  const switchedLang =
    currentLang === LANGUAGES.AR ? LANGUAGES.EN : LANGUAGES.AR;
  localStorage.setItem("locale", switchedLang);
  window.location.reload();
};

export const getDirection = () => {
  if (currentLang === LANGUAGES.EN) return "ltr";
  else return "rtl";
};

export const getLang = () => localStorage.getItem("locale") || LANGUAGES.EN;

export const handleSearch = () => {
  // Perform search logic here
};

export const handleVoiceSearch = () => {
  // Perform voice search logic here
};

export const handleImageSearch = () => {
  // Perform image search logic here
};

export const handleGoogleAccount = () => {
  // Perform google account logic here
};

export const handleGoogleApps = () => {
  // Perform google apps search logic here
};

export const handleSettings = () => {
  // Perform settings search logic here
};
