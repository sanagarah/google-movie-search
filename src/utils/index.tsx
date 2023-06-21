const currentLang = localStorage.getItem("locale") || "en";

export const changeLang = () => {
  const switchedLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("locale", switchedLang);
  window.location.reload();
};

export const getDirection = () => {
  if (currentLang === "en") return "ltr";
  else return "rtl";
};

export const getLang = () => localStorage.getItem("locale") || "en";

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
